<?php

namespace App\Http\Controllers\User;

use App\Helper\Cart;
use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function view()
    {
        return Inertia::render('User/Cart/View');
    }

    public function store(Request $request, Product $product)
    {
        $quantity = $request->post('quantity', 1);
        $user = $request->user();

        if ($user) {
            $cartItem = CartItem::where(['user_id' => $user->id, 'product_id' => $product->id])->first();

            if ($cartItem) {
                $cartItem->increment('quantity');
            } else {
                CartItem::create([
                    'user_id' => $user->id,
                    'product_id' => $product->id,
                    'quantity' => 1,
                ]);
            }
        } else {
            $cartItems = Cart::getCookieCartItems();
            $isProductExists = false;

            foreach ($cartItems as $cartItem) {
                if ($cartItem['product_id'] == $product->id) {
                    $cartItem['quantity'] += $quantity;
                    $isProductExists = true;
                    break;
                }
            }

            if (!$isProductExists) {
                $cartItems[] = [
                    'user_id' => null,
                    'product_id' => $product->id,
                    'quantity' => $quantity,
                    'price' => $product->price,
                ];
            }

            Cart::setCookieCartItems($cartItems);
        }

        return redirect()->back()->with('success', "Cart Added Successfully");
    }
    public function update(Request $request, Product $product)
    {
        $quantity = $request->integer('quantity');
        $user = $request->user();

        if ($user) {
            $cartItem = CartItem::where(['user_id' => $user->id, 'product_id' => $product->id])->first();

            if ($cartItem) {
                $cartItem->update(['quantity' => $quantity]);
            }
        } else {
            $cartItems = Cart::getCookieCartItems();

            foreach ($cartItems as $cartItem) {
                if ($cartItem['product_id'] == $product->id) {
                    $cartItem['quantity'] = $quantity;
                    break;
                }
            }

            Cart::setCookieCartItems($cartItems);
        }

        return redirect()->back();
    }
    public function delete(Request $request, Product $product)
    {
        $user = $request->user();

        if ($user) {
            CartItem::query()->where(['user_id' => $user->id, 'product_id' => $product->id])->first()?->delete();

            if (CartItem::count() <= 0) {
                return redirect()->route('home')->with('info', 'Cart is empty');
            } else {
                return redirect()->back()->with('info', 'Cart Deleted Successfully');
            }
        } else {
            $cartItems = Cart::getCookieCartItems();

            foreach ($cartItems as $key => $cartItem) {
                if ($cartItem['product_id'] == $product->id) {
                    array_splice($cartItems, $key, 1);
                    break;
                }
            }

            Cart::setCookieCartItems($cartItems);

            if (CartItem::count() <= 0) {
                return redirect()->route('home')->with('info', 'Cart is empty');
            } else {
                return redirect()->back()->with('info', 'Cart Deleted Successfully');
            }
        }

        return redirect()->back();
    }
}
