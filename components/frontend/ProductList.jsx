// components/ProductList.js
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '@/redux/slices/cartSlice';
import { getData } from '@/lib/getData';
import Link from 'next/link';

export default function ProductList({ slug, id }) {
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategoryData() {
      try {
        const categoryData = await getData("categories");

        if (slug) {
          const foundCategory = categoryData.find(category => category.slug === slug);
          setCategory(foundCategory);
        } else if (id) {
          const foundCategoryId = categoryData.find(category => category.id === id);
          setCategory(foundCategoryId);
        }
      } catch (error) {
        console.error('Failed to fetch category data:', error);
      }
    }
    fetchCategoryData();
  }, [slug, id]);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    toast.success("Item added to cart successfully!");
  }

  if (!category) {
    return <p className="text-center text-red-500 font-semibold">Loading category...</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
      {category.products.map((product) => {
        const showDiscount = product.discount > 0;
        return (
          <div key={product.id} className="border bg-slate-50 flex flex-col shadow-md rounded-lg hover:shadow-lg">
            <Link href={`/products/${product.slug}`} passHref>
              <div className='relative'>
                {showDiscount && (
                  <div className="absolute top-0 left-0 bg-orange-500 text-slate-50 text-xs px-4 rounded-br-lg">
                    {product.discount}% off
                  </div>
                )}
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  className='w-full object-cover h-40 sm:h-56 md:h-64'
                  width={130}
                  height={130}
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col justify-between h-1/2">
            <Link href={`/products/${product.slug}`} passHref>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{product.title}</h3>
                <div className='justify-between flex'>
                  <p className="text-sm text-gray-600">{product.unit}</p>
                  <p className="text-sm text-gray-600">Packet</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-slate-800 flex items-baseline">
                    ₹{showDiscount ? product.discountedPrice : product.product_price}
                    {showDiscount && <span className="text-sm font-normal text-slate-800 ml-1">MRP</span>}
                    {showDiscount && <span className="text-sm text-gray-500 line-through ml-2">₹{product.product_price}</span>}
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
        );
      })}
    </div>
  );
}
