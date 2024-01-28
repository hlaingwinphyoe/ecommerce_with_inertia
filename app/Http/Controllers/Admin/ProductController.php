<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImages;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['brand', 'category', 'product_images'])->latest()->paginate(20);

        $brands = Brand::get();
        $categories = Category::get();
        return Inertia::render('Admin/Product/Index', [
            'products' => $products,
            'brands' => $brands,
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'quantity' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category' => 'required',
            'brand' => 'required',
        ]);

        $product = new Product();

        $product->title = $request->title;
        $product->quantity = $request->quantity;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category_id = $request->category;
        $product->brand_id = $request->brand;

        $product->save();

        // check images
        if ($request->hasFile('images')) {
            $medias = $request->file('images');

            foreach ($medias as $media) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $media->getClientOriginalExtension();

                $media->move('products', $uniqueName);

                ProductImages::create([
                    'product_id' => $product->id,
                    'image' => 'products/' . $uniqueName
                ]);
            }
        }

        return redirect()->back()->with('success', 'Success');
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->title = $request->title;
        $product->quantity = $request->quantity;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category_id = $request->category;
        $product->brand_id = $request->brand;
        $product->update();

        // check images
        if ($request->hasFile('images')) {
            $medias = $request->file('images');

            foreach ($medias as $media) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $media->getClientOriginalExtension();

                $media->move('products', $uniqueName);

                ProductImages::create([
                    'product_id' => $product->id,
                    'image' => 'products/' . $uniqueName
                ]);
            }
        }
        return redirect()->back()->with('success', 'Updated!');
    }

    public function deleteImage($id)
    {
        $image = ProductImages::findOrfail($id);
        $image->delete();

        return redirect()->route('admin.products.index')->with('success', "Images deleted successfully");
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        if ($product->product_images) {
            foreach ($product->product_images as $img) {
                unlink(public_path($img->image));
            }
        }
        $product->delete();

        return redirect()->back()->with('success', "Product Deleted successfully");
    }
}
