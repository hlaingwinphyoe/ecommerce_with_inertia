<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductController;
use Illuminate\Support\Facades\Route;

Route::middleware('redirectAdmin')->controller(AdminAuthController::class)->name('admin.')->group(function () {
    Route::get('login', 'loginView')->name('login');
    Route::post('login', 'login')->name('login.store');
    Route::post('logout', 'logout')->name('logout');
});

Route::middleware(['auth', 'admin'])->controller(AdminController::class)->name('admin.')->group(function () {
    Route::get('/dashboard', 'index')->name('dashboard');

    // products
    Route::controller(ProductController::class)->name('products.')->group(function () {
        Route::get('/products', 'index')->name('index');
        Route::post('/products', 'store')->name('store');
        Route::put('/products/{product}/update', 'update')->name('update');
        Route::delete('/products/destroy/{product}', 'destroy')->name('destroy');
        Route::delete('/products/images/{id}', 'deleteImage')->name('product.image.delete');
    });;
});
