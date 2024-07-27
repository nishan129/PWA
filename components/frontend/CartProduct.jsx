"use client";
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';

export default function CartCartItem({ cartItem }) {
  const dispatch = useDispatch();

  function handleCartItemDelete(cartId) {
    dispatch(removeFromCart(cartId));
    toast.success("Item Remove successfully")
  }

  function handleQuantityChange(cartId, delta) {
    if (delta > 0) {
      dispatch(incrementQty(cartId));
    } else {
      dispatch(decrementQty(cartId));
    }
  }

  return (
    <div className="border border-green-600 bg-slate-50 dark:bg-slate-800 rounded-md p-4 mb-4 shadow-lg">
      <div className="flex">
        <input
          type="checkbox"
          className="mr-4 text-green-500 border-green-400"
          checked
          readOnly
        />
        <Image
          src={cartItem.imageUrl}
          width={150}
          height={150}
          alt={cartItem.title}
          className="w-20 h-20 object-cover"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{cartItem.title}</h2>
          {cartItem.discount && (
            <div className="text-green-600 text-xs">
              {cartItem.discount}% Discount <span className="text-xs">Limited time deal</span>
            </div>
          )}
          <div className="text-lg font-bold">₹{cartItem.discountedPrice}</div>
          {cartItem.discount && (
            <div className="text-gray-500 line-through">₹{cartItem.product_price}</div>
          )}
          <div className="text-green-500">In stock</div>
          <div className="rounded-xl border border-gray-400 flex gap-3 items-center mt-4">
            <button
              className="border-r border-gray-400 py-2 px-3"
              onClick={() => handleQuantityChange(cartItem.id, -1)}
            >
              <Minus />
            </button>
            <p className="flex-grow py-2 px-4 text-center">{cartItem.qty}</p>
            <button
              className="border-l border-gray-400 py-2 px-2"
              onClick={() => handleQuantityChange(cartItem.id, 1)}
            >
              <Plus />
            </button>
            <button
              className="border-l border-gray-400 py-2 px-2 text-red-500"
              onClick={() => handleCartItemDelete(cartItem.id)}
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
