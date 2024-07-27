"use client"
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';

export default function SearchMa() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!query) {
      setProducts([]);
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
    }, 300); // Debounce the input by 300ms

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <>
      <form className="flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600"
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
          <ul>
            {products.map((product) => (
              <li key={product.id} className="mb-4">
                <a href={`/product/${product.id}`} className="text-green-600 hover:underline">
                  {product.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
