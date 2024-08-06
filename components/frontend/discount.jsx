"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '@/redux/slices/cartSlice';
import { getData } from '@/lib/getData';
import Link from 'next/link';
import { nameShortener } from '@/lib/nameShort';

export default function DiscountProducts({ discount }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProductData() {
      try {
        const productData = await getData("products");
        setProducts(productData);
      } catch (error) {
        toast.error("Failed to load products");
      }
    }

    fetchProductData();
  }, []);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    toast.success("Item added to cart successfully!");
  }

  if (!products.length) {
    return <p className="text-center text-red-500 font-semibold">Loading products...</p>;
  }

  const discountedProducts = products.filter(product => product.discount === parseInt(discount));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
      {discountedProducts.length > 0 ? (
        discountedProducts.map((product) => (
          <div key={product.id} className="border bg-slate-50 flex flex-col shadow-md rounded-lg hover:shadow-lg">
            <Link href={`/products/${product.slug}`}>
              <div className='relative'>
                {product.discount && (
                  <div className="absolute top-0 left-0 bg-orange-500 text-slate-50 text-xs px-4 rounded-br-lg">
                    {product.discount}% off
                  </div>
                )}
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className='w-full object-cover h-20 sm:h-32 md:h-32'
                  width={130}
                  height={130}
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col justify-between h-1/2">
              <Link href={`/products/${product.slug}`}>
                <div>
                  <h3 className="text-sm font-small text-gray-800">{nameShortener(product.title, 15)}</h3>
                  <div className='justify-between flex'>
                    <p className="text-sm text-gray-600">{product.unit}</p>
                    <p className="text-sm text-gray-600">{product.packets_box_peti}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-slate-800 flex items-baseline">
                      ₹{product.discount ? product.discountedPrice : product.product_price}
                      {product.discount && (
                        <>
                          <span className="text-sm font-normal text-slate-800 ml-1">MRP</span>
                          <span className="text-sm text-gray-500 line-through ml-2">₹{product.product_price}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 font-semibold col-span-full">No discounted products found</p>
      )}
    </div>
  );
}
