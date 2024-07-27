"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '@/components/frontend/CartProduct';
import CartItems from '@/components/frontend/CartItems';
import EmptyCart from '@/components/frontend/EmptyCart';

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  console.log(cartItems)
  const subTotal = cartItems
    .reduce((acc, currentItem) => acc + (currentItem.discountedPrice * currentItem.qty), 0)
    .toFixed(2);

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, i) => (
          <div key={i}>
            <CartProduct cartItem={item} />
          </div>
        ))
      ) : (
       <EmptyCart />
      )}
      {cartItems.length > 0 && <CartItems Subtotal={subTotal} />}
    </div>
  );
}
