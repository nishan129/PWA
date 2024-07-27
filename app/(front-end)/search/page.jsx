"use client";
import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SearchMa() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!query) {
      setProducts([]);
      setIsSearching(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/search?query=${query}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchProducts();
      setIsSearching(true);
    }, 300); // Debounce the input by 300ms

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleHomeRedirect = () => {
    setIsSearching(false);
    router.push('/');
  };

  useEffect(() => {
    const bottomNavbar = document.querySelector('.bottom-navbar');
    if (bottomNavbar) {
      bottomNavbar.style.display = isSearching ? 'none' : 'flex';
    }
  }, [isSearching]);

  return (
    <div className={`fixed inset-0 bg-white z-50 p-4 overflow-auto ${isSearching ? 'top-0' : ''}`}>
      <form className="flex items-center">
        <button onClick={handleHomeRedirect} className="mr-2 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full pl-10 p-2.5"
            placeholder="Search Products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
      </form>

      {products.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Products</h2>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex items-center">
                <img src={product.imageUrl} alt={product.title} className="w-12 h-12 mr-4 rounded-lg object-cover" />
                <a href={`/product/${product.id}`} className="text-green-600 hover:underline">
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {products.length === 0 && query && (
        <p className="text-gray-500 mt-4">No products found.</p>
      )}
    </div>
  );
}
