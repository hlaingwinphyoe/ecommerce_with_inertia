<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductListController extends Controller
{
    public function index()
    {
        $brands = Brand::get();
        $categories = Category::get();

        $products = Product::filtered()->with('brand', 'category', 'product_images')->paginate(10)->withQueryString();
        return Inertia::render('User/ProductList', [
            'products' => ProductResource::collection($products),
            'brands' => $brands,
            'categories' => $categories
        ]);
    }
}
