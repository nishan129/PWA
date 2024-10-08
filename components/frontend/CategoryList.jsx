import Link from 'next/link';
import React from 'react';
import CategoryCarousel from './CategoryCarousel';
import { ChevronRight } from 'lucide-react';

export default function CategoryList({ categories }) {

  const categorie = categories.filter((category)=>{
    return category.products.length >= 1;
  })
  console.log(categorie)
  return (
    <div>
      {categorie.map((category, index) => (
        <div key={index} className='rounded-lg  text-slate-800 overflow-hidden mb-4'>
          <div className="bg-white dark:bg-white py-1 px-2
          font-semibold  text-slate-800 dark:text-slate-800
          flex justify-between items-center">
            <h2>{category.title}</h2>
            <Link href={`/category/${category.slug}`} className='bg-green-600 text-slate-50 rounded-full px-1 py-1' >
            <ChevronRight /></Link>
          </div>
          <div className='dark:bg-slate-100'>
            <CategoryCarousel products={category.products}/>
          </div>
        </div>
      ))}
    </div>
  );
}
