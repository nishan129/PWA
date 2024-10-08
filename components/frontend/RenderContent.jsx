import Link from 'next/link';
import React from 'react';

const renderContent = (activeMarket, markets = []) => {
  const activeMarketData = markets.find(market => market.title === activeMarket);
  const categories = activeMarketData?.categories || [];

  return (
    <div className="container mx-auto bg-white dark:bg-white rounded-lg">
      <h2 className="text-center text-md mb-3">Shop by Category</h2>
      {categories.length > 0 ? (
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg hover:bg-slate-200">
              <Link href={`/category/${category.slug}`} className="w-16 text-sm h-16 relative">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md w-16 h-12"
                />
              </Link>
              <Link  href={`/category/${category.slug}`} className="w-16 text-sm text-center relative">
              <span className='text-sm text-center dark:text-slate-800'>{category.title}</span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>Loding....</div>
      )}
    </div>
  );
};

export default renderContent;
