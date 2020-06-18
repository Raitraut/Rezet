<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderStore extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|alpha_spaces|min:8|max:30',
            'address' => 'required|alpha_num_spaces|min:8|max:50',
            'email' => 'email:rfc,dns|min:8|max:30',
            'phone' => 'phone|min:10|max:14',
            'shipping_type' => 'required|alpha|min:4|max:8',
            'shipping_price' => 'required|numeric|min:3|max:5',
            'total_price' => 'required|numeric|min:1|max:50',
            'products_quantity' => 'required|min:1|max:100'
        ];
    }
}
