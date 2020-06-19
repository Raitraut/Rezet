<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', ' image', 'price'];

    public function setImageAttribute($image)
    {
        $this->attributes['image'] = $image->move('public',$image->getClientOriginalName());
    }

    public function getImageAttribute($image)
    {
        $path = $image === null ? 'someone.jpg' : $image;
        return '/storage/app/public/' . $path;
    }
}
