<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        $ids = request('products_id');
        if($ids === null || $ids === '') {
            return response()->json([], 204);
        }
        $cart = Product::findOrFail(explode(',', $ids));
        return response()->json(['cart' => $cart]);
    }
}
