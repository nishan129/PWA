import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import eCart from "../../public/eCart.png";

export default function EmptyCart() {
  return (
      <div className='max-w-md w-full  p-4  rounded-lg overflow'>
        <div className='p-6 text-center'>
          <Image src={eCart} width={400} height={200} alt="Empty Cart" className='mx-auto animate-bounce' />
          <p className='text-2xl font-semibold mt-4 text-gray-700'>Your Cart is Empty</p>
          <p className='text-gray-500 mt-2'>Looks like you haven't added anything to your cart yet.</p>
          <Link href="/" passHref>
            <button className='mt-6 text-lg text-white bg-green-600 hover:bg-green-700 focus:bg-green-700 focus:ring focus:ring-green-300 rounded-lg px-6 py-3 transition-all duration-300'>
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
  );
}
