<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function products()
    {
        return inertia('backend/products/index',[
            'products' => \App\Models\Product::all()
        ]); 
    }   
    public function productCreate()
    {
        return inertia('backend/products/create');
    }
    public function productStore(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
        ]);

        $product = new \App\Models\Product();
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->quantity = $request->input('quantity');
        $product->save();

        return redirect()->route('admin.products')->with('success', 'Product created successfully.');
    }
}
