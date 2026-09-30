<?php

use App\Http\Controllers\DashboradController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::controller(FrontendController::class)->group(function () {

    Route::get('/products', 'products')->name('products');


    Route::get('/about', 'about')->name('about');
    Route::get('/contact', 'contact')->name('contact');
    Route::get('/services', 'services')->name('services');
    Route::get('/portfolio', 'portfolio')->name('portfolio');
    Route::get('/blog', 'blog')->name('blog');
    Route::get('/blog/{slug}', 'blogDetail')->name('blog.detail');
});










Route::middleware(['auth', 'admin'])->group(function () {

    Route::get('dashboard', [DashboradController::class, 'dashboard'])->name('dashboard');

    Route::get('admin/dashboard', [DashboradController::class, 'index'])->name('admin.dashboard');


    Route::get('admin/users', [DashboradController::class, 'users'])->name('admin.users');
    Route::get('admin/users/create', [DashboradController::class, 'userCreate'])->name('admin.users.create');
    Route::post('admin/users/store', [DashboradController::class, 'userStore'])->name('admin.users.store');


    Route::get('admin/products', [ProductController::class, 'products'])->name('admin.products');
    Route::get('admin/products/create', [ProductController::class, 'productCreate'])->name('admin.products.create');
    Route::post('admin/products/store', [ProductController::class, 'productStore'])->name('admin.products.store');

});

require __DIR__ . '/settings.php';
