import Link from 'next/link';
import React from 'react';

export default function CartItems({ Subtotal }) {
  const shippingCost = 10;
  const Tax = 0;
  const total = parseFloat(Subtotal) + shippingCost + Tax;

  return (
    <div className="border border-green-600 bg-slate-50 dark:bg-slate-800 rounded-md p-4 mb-4 shadow-xl">
      <h2 className="font-bold text-2xl py-2">Cart Total</h2>
      <div className="flex items-center justify-between border-b pb-4 border-green-600">
        <span>SubTotal</span>
        <span>₹{Subtotal}</span>
      </div>
      <div className="flex items-center justify-between py-4">
        <span>Tax</span>
        <span>₹0</span>
      </div>
      <div className="flex items-center justify-between pb-4">
        <span>Shipping</span>
        <span>₹{shippingCost}</span>
      </div>
      <p>We only charge for shipping when you have over 2kg items.</p>
      <div className="flex items-center justify-between py-4">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
      <Link href={'/checkout'} className="bg-green-600 text-slate-50 rounded-lg py-2 px-4">
        Continue to Checkout
      </Link>
    </div>
  );
}
