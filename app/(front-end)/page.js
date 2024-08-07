"use client";
import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import renderContent from '@/components/frontend/RenderContent';
import Hero from '@/components/frontend/Hero';
import CategoryList from '@/components/frontend/CategoryList';
import { getData } from '@/lib/getData';
import { getSession } from 'next-auth/react';
import BannerCursor from '@/components/frontend/BannerCursor';
import Banner from '@/components/frontend/Banner';

// Dynamically import the BannerCursor component

export default function Home() {
  const [markets, setMarkets] = useState([]);
  const [activeMarket, setActiveMarket] = useState('FMCG');
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchMarkets = async () => {
      const data = await getData('markets');
      setMarkets(data || []); // Ensure data is an array
    };
    fetchMarkets();
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
      console.log(session?.user);
    };
    fetchSession();
  }, []);

  const handleMarketClick = (market) => {
    setActiveMarket(market);
    // console.log(`Category clicked in Hero: ${market}`);
  };

  return (
    <div className="min-h-screen py-20">
      <Hero onMarketClick={handleMarketClick} markets={markets} />
      {/* Render content based on activeMarket */}
      {markets.length > 0 && (
          <BannerCursor activeMarket={activeMarket} markets={markets} />
      )}
      {renderContent(activeMarket, markets)}
      
      {markets.length > 0 && markets.map((market, index) => (
        market.title === activeMarket && (
          <div key={index} className="py-4">
            <CategoryList categories={market.categories} />
          </div>
        )
      ))}

      <Banner />
    </div>
  );
}
