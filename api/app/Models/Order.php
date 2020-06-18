<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'name', 'email', 'address', 'phone', 'shipping_type', 'shipping_price', 'total_price'
    ];
    public function orderItems()
    {
        $this->hasMany('App\Models\OrderItem');
    }
}
