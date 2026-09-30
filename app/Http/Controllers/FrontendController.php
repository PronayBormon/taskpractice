<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function products()
    {
        return inertia('frontend/products',[
            'products' => \App\Models\Product::all()
        ]);
    }
    public function about()
    {
        return inertia('frontend/about');
    }
    public function contact()
    {
        return inertia('frontend/contact');
    }
    public function services()
    {
        return inertia('frontend/services');
    }
    public function portfolio()
    {
        return inertia('frontend/portfolio');
    }
    public function blog()
    {
        return inertia('frontend/blog');
    }
    public function blogDetail($slug)
    {
        return inertia('frontend/blog-detail', [
            'slug' => $slug
        ]);
    }
}
