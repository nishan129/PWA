import Link from 'next/link';
import React from 'react';

const renderContent = (activeMarket, markets = []) => {
  const activeMarketData = markets.find(market => market.title === activeMarket);
  const categories = activeMarketData?.categories || [];

  return (
    <div className="container mx-auto px-4 bg-slate-50 dark:bg-slate-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      {categories.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-2 bg-white rounded-lg hover:bg-slate-200">
              <Link href={`/category/${category.slug}`} className="w-16 text-sm h-16 mb-2 relative hover:bg-green-400">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </Link>
              <span className=' text-sm text-center dark:text-slate-800'>{category.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <div>Select a market to see items.</div>
      )}
    </div>
  );
};

export default renderContent;
