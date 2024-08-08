"use client";
import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {nameShortener} from "@/lib/nameShort";
import { addToCart } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function ProductCard({ product }) {
    const dispatch = useDispatch()
    function handleAddToCart(){
// // Dispatch the reducer 
        dispatch(addToCart(product));
        toast.success("Item added Successfully")
    }
    const formattedPrice = Math.floor(product.discountedPrice);
    const showDiscount = product.discount > 0;

    return (
        <div className="border bg-slate-50 flex flex-col shadow-2xl rounded-lg p-2 w-full ">
             <Link href={`/products/${product.slug}`}>
            <div className="relative">
                {showDiscount && (
                    <div className="absolute top-0 left-0 bg-orange-500 text-slate-50 text-xs px-2 py-1 rounded-br-lg">
                        {product.discount}% off
                    </div>
                )}
            <div className='ml-4 justify-between rounded-lg items-center w-20 h-20 sm:h-32 md:h-32'>
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={130}
                    height={130}
                    className="object-cover w-full h-full"
                />
                </div>
            </div>
            </Link>
            <div className="mt-2 flex flex-col items-start">
            <Link href={`/products/${product.slug}`}>
                <h3 className="text-sm font-small text-gray-900 ">
                    {nameShortener(product.title,12)}
                </h3>
               <div className='justify-between flex'>
               <p className="text-sm text-gray-600">{product.unit}</p>
               <p className="text-sm text-gray-600">{product.packets_box_peti}</p>
               </div>
                </Link>
                <Link href={`/products/${product.slug}`}>
                <div className="text-lg font-semibold text-slate-800 flex items-baseline">
                    ₹{showDiscount ? formattedPrice : product.product_price}
                    {showDiscount && <span className="text-sm font-normal text-slate-800 ">MRP</span>}
                    {showDiscount && <span className="text-sm text-gray-500 line-through">₹{product.product_price}</span>}
                </div>
                </Link>
                <button   onClick={()=> handleAddToCart()} className="mt-2 bg-green-600 text-white text-sm px-4 py-1 rounded-sm flex items-center justify-center w-full">
                    Add
                </button>
            </div>
        </div>
    );
}
