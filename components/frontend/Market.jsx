"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getData } from '@/lib/getData';

export default function MarketPage({ onMarketClick , markets}) {

  const [activeMarket, setActiveMarket] = useState('FMGC');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = (market) => {
    setActiveMarket(market);
    onMarketClick(market); // Notify parent component about the selected market
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`rounded-lg w-full transition-all dark:bg-slate-600 duration-300 ${isScrolled ? 'bg-white dark:bg-slate-600 shadow-md py-4' : 'bg-slate-50 py-4'}`}>
      <div className="flex justify-center items-center space-x-4">
        {isScrolled ? (
          markets.map((market, index) => (
            <div
              key={index}
              className={`cursor-pointer w-full h-6 font-bold text-center rounded ${activeMarket === market.title ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => handleClick(market.title)}
              style={{ margin: '0 10px' }}
            >
              {market.title}
            </div>
          ))
        ) : (
          markets.map((market, index) => (
            <div
              key={index}
              className={`relative flex font-bold flex-col items-center p-2 cursor-pointer rounded-lg overflow-hidden ${activeMarket === market.title ? 'bg-green-600' : 'bg-gray-200'}`}
              onClick={() => handleClick(market.title)}
              style={{ margin: '0 10px' }}
            >
              <div className=" mb-2 rounded-lg relative">
                <Image
                  src={market.logoUrl}
                  width={250}
                  height={150}
                  alt={market.title}
                  className={`rounded-2xl duration-500 ${isScrolled ? '' : 'opacity-100'}`}
                />
              </div>
              <div className={`absolute bottom-0 w-full text-center ${activeMarket === market.title ? 'text-white bg-green-600' : 'text-black bg-gray-200'}`}>
                {market.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
