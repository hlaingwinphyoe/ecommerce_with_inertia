<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::middleware('redirectAdmin')->controller(AdminAuthController::class)->name('admin.')->group(function () {
    Route::get('login', 'loginView')->name('login');
    Route::post('login', 'login')->name('login.store');
    Route::post('logout', 'logout')->name('logout');
});

Route::middleware('admin')->controller(AdminController::class)->name('admin.')->group(function () {
    Route::get('/dashboard', 'index')->name('dashboard');
});
