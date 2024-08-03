"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Minus, Plus } from 'lucide-react';
import { addToCart } from '@/redux/slices/cartSlice';
import { getData } from '@/lib/getData';
import ProductList from '@/components/frontend/ProductList';
import ProductImage from '@/components/frontend/ProductImage';

export default function ProductDetailPage({ params: { slug } }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProductData() {
      try {
        const productData = await getData("products");
        const foundProduct = productData.find(product => product.slug === slug);
        setProduct(foundProduct);
      } catch (error) {
        console.error('Failed to fetch product data:', error);
      }
    }
    fetchProductData();
  }, [slug]);

  function handleAddToCart() {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      toast.success("Item added to cart successfully!");
    }
  }

  function handleQuantityChange(delta) {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + delta;
      return Math.max(1, newQuantity); // Ensure quantity does not go below 10
    });
  }

  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const discount = Math.round((1 - product.discountedPrice / product.product_price) * 100);

  return (
    <div className="p-4 border">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="relative w-full md:w-1/2">
          {/* {product.discountedPrice < product.product_price && (
            <div className="absolute top-0 left-0 bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded-b-2xl">
              {discount}% off
            </div>
          )} */}
          <ProductImage productImages={product.productImages} />
        </div>
        
        <div className="w-full md:w-1/2 p-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <h2>{product.unit}</h2>
          </div>
          <div className="mt-2 gap-2 flex items-center">
            <span className="text-2xl font-semibold text-gray-900">₹{product.discountedPrice}</span>
            {product.product_price > product.discountedPrice && (
              <>
                <span className="ml-2 text-lg text-gray-500 line-through">₹{product.product_price}</span>
                <span className="ml-2 text-lg text-green-600">{discount}% off</span>
              </>
            )}
          </div>
          <h2>Piece Price ₹{product.piece_price}</h2>
          <p className="mt-1 text-gray-700">Minimum Wholesale Quantity: 1 {product.packets_box_peti}</p>
          <p className="text-gray-700">Per {product.packets_box_peti}: {product.no_piece} pieces</p>
          <div className="flex items-center gap-12 mt-4">
            <button 
              className="bg-green-600 text-white px-4 py-2  rounded-md hover:bg-green-700 transition duration-200"
              onClick={handleAddToCart}
            >
              Add
            </button>
            <div className="ml-4 flex items-center border border-green-400 rounded-lg">
              <button 
                className="border-r border-gray-400 px-2 py-1" 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1} // Disable when quantity is 10
              >
                <Minus />
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                className="border-l border-gray-400 px-2 py-1" 
                onClick={() => handleQuantityChange(1)}
              >
                <Plus />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-green-500 w-full mt-4">
        <h3 className="text-xl font-semibold text-gray-800">Product Description</h3>
        <p>{product.description}</p>
      </div>
      <div className="mt-4">
        <ProductList id={product.categoryId} />
      </div>
    </div>
  );
}
