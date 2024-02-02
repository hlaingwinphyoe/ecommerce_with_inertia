<?php

namespace App\Http\Controllers\User;

use App\Helper\Cart;
use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\UserAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CheckoutController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();
        $products = $request->products;
        $carts = $request->carts;
        $total = $request->total;

        $mergeData = [];

        foreach ($carts as $cart) {
            foreach ($products as $product) {
                if ($cart['product_id'] === $product['id']) {
                    $mergeData[] = array_merge($cart, ['title' => $product['title'], 'price' => $product['price']]);
                }
            }
        }

        // stripe payment
        $stripe = new \Stripe\StripeClient(env('STRIPE_KEY'));

        $line_items = [];

        foreach ($mergeData as $item) {
            $line_items[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'unit_amount' => (int) ($item['price'] * 100),
                    'product_data' => [
                        'name' => $item['title'],
                    ],
                ],
                'quantity' => $item['quantity'],
            ];
        }

        $checkout_session = $stripe->checkout->sessions->create([
            'line_items' => $line_items,
            'mode' => 'payment',
            'success_url' => route('checkout.success') . '?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('checkout.cancel'),
        ]);

        $newAddress = $request->address;
        if ($newAddress['address'] !== null) {
            $existAddress = UserAddress::where('user_id', $user->id)->where('isMain', 1)->first();

            if ($existAddress) {
                $existAddress->update(['isMain' => 0]);
            }

            $address = new UserAddress();
            $address->address1 = $newAddress['address'];
            $address->state = $newAddress['state'];
            $address->city = $newAddress['city'];
            $address->zipcode = $newAddress['zipcode'];
            $address->country_code = $newAddress['country_code'];
            $address->type = $newAddress['type'];
            $address->user_id = Auth::id();
            $address->save();
        }

        $mainAddress = $user->user_addresses()->where('isMain', 1)->first();
        if ($mainAddress) {
            $order = new Order();
            $order->status = 'unpaid';
            $order->total_price = $total;
            $order->session_id = $checkout_session->id;
            $order->created_by = $user->id;

            // if a main address with isMain = 1 exists, set its id as customer address id
            $order->user_address_id = $mainAddress->id;
            $order->save();

            $cartItems = CartItem::where('user_id', $user->id)->get();

            foreach ($cartItems as $cartItem) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $cartItem->product_id,
                    'quantity' => $cartItem->quantity,
                    'unit_price' => $cartItem->product->price,
                ]);

                $cartItem->delete();

                // remove cartItem form cookies
                $cartItems = Cart::getCookieCartItems();
                foreach ($cartItems as $item) {
                    unset($item);
                }

                array_splice($cartItems, 0, count($cartItems)); // reduce until 0
                Cart::setCookieCartItems($cartItems);
            }

            // payment
            $paymentData = [
                'order_id' => $order->id,
                'amount' => $total,
                'status' => 'pending',
                'type' => 'stripe',
                'created_by' => $user->id,
                'updated_by' => $user->id,

            ];

            Payment::create($paymentData);
        }

        return Inertia::location($checkout_session->url); // must use location coz normal redirect cors error can gain

    }

    public function success(Request $request)
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_KEY'));
        $sessionId = $request->get('session_id');
        try {
            $session = \Stripe\Checkout\Session::retrieve($sessionId);
            if (!$session) {
                throw new NotFoundHttpException();
            }

            $order = Order::where('session_id', $session->id)->first();

            if (!$order) {
                throw new NotFoundHttpException();
            }

            if ($order->status === 'unpaid') {
                $order->status = 'paid';
                $order->save();
            }

            return redirect()->route('dashboard');
        } catch (\Exception $e) {
            throw new NotFoundHttpException();
        }
    }
}
