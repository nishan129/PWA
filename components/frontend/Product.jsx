import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IndianRupee, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import toast from 'react-hot-toast';

export default function Product({product}) {
    const dispatch = useDispatch()
    function handleAddToCart(){
// Dispatch the reducer 
        dispatch(addToCart(product));
        toast.success("Item added Successfully")
    }
  return (
    <div  className='rounded-lg bg-slate-300 overflow-hidden border border-green-600 shadow-sm'>
                <Link href={`products/${product.productCode}`}>
                <Image 
                src = {product.imageUrl}
                alt={product.title}
                width={100}
                height={100}
                className='w-full h-48 object-cover'/>
                </Link>
                <div className="px-4">
                <Link href={`products/${product.productCode}`}>
                <h2 className='text-center dark:text-sky-200 text-slate-950 font-bold my-2' >
                    {product.title}
                </h2>
                </Link>
                <div className="flex justify-between gap-2 pb-3">
                
                  <span className='flex items-center text-slate-950'><IndianRupee />
                    {product.product_price}</span>
                  <button onClick={()=> handleAddToCart()} className='flex items-center space-x-2 bg-green-600 text-slate-50 rounded-md px-4 py-2'>
                    <ShoppingCart /> 
                    <span>Add</span>
                  </button>
                </div>
                </div>
            </div> 
  )
}
