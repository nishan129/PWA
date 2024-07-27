import React from 'react';
import MarketPage from './Market';

export default function Hero({ onMarketClick, markets }) {
  return (
    <div className="flex w-full fixed top-20 z-50 flex-col items-center">
      <MarketPage onMarketClick={onMarketClick} markets={markets} />
    </div>
  );
}
