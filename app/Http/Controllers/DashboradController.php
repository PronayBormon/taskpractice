<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboradController extends Controller
{
    public function dashboard(Request $request)
    {
        return redirect()->route('admin.dashboard');
    }
    public function index(Request $request)
    {
        return Inertia::render('backend/dashboard');
    }
    public function users(Request $request)
    {
        return Inertia::render('backend/users');
    }
    public function userCreate(Request $request)
    {
        return Inertia::render('backend/create');
    }
    public function userStore(Request $request)
    {
        dd($request->all());
        // Handle user store logic
    }
}
