import Link from 'next/link';
import React from 'react';
import CategoryCarousel from './CategoryCarousel';

export default function CategoryList({ categories }) {

  const categorie = categories.filter((category)=>{
    return category.products.length >= 1;
  })
  console.log(categorie)
  return (
    <div>
      {categorie.map((category, index) => (
        <div key={index} className='border border-green-600 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden mb-4'>
          <div className="bg-slate-100 dark:bg-gray-800 py-3 px-6 
          font-semibold border-b border-green-600 dark:border-gray-600 text-slate-800 dark:text-slate-100
          flex justify-between items-center">
            <h2>{category.title}</h2>
            <Link href={`/category/${category.slug}`} className='bg-green-600 text-slate-50 rounded-md px-4  
            py-2 ' > See All</Link>
          </div>
          <div className='dark:bg-slate-700'>
            <CategoryCarousel products={category.products}/>
          </div>
        </div>
      ))}
    </div>
  );
}
