import React from 'react';
import Link from 'next/link';

export default function OrderConfirmed() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed</h2>
        <p className="text-xl text-gray-700 mb-6">Thank you for your purchase!</p>
        <svg
          className="w-16 h-16 text-green-600 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2l4 -4M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
          />
        </svg>
        <p className="text-gray-600">
          You will receive a confirmation email with your order details shortly.
        </p>
        <Link href="/" passHref>
        <button  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Continue Shopping
        </button>
        </Link>
      </div>
    </div>
  );
}

