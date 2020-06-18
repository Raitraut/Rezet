<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('product','Api\ProductController')->only('index');
Route::resource('order', 'Api\OrderController')->only('store');
Route::get('cart', 'Api\CartController@index')->name('cart.index');
