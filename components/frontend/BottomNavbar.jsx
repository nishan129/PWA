// components/frontend/BottomNavbar.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaShoppingCart, FaRedo, FaUser } from 'react-icons/fa';
import { Orbit, Store,ShoppingCart, Compass } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Loading from '@/app/loading';


export default function BottomNavbar() {
  const {data:session, status } = useSession()
  if (status === "loading") {
    <Loading />
  }
  
  const [active, setActive] = useState('home');

  const handleClick = (button) => {
    setActive(button);
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-around dark:bg-slate-700 bg-slate-100 p-2 shadow-lg z-50">
      <Link href="/" onClick={() => handleClick('home')} className={`flex flex-col items-center no-underline ${active === 'home' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-50'}`}>
        <Store />
        <span>Home</span>
      </Link>
      <Link href="/buy-again" onClick={() => handleClick('buyAgain')} className={`flex flex-col items-center no-underline ${active === 'buyAgain' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-50'}`}>
        <Orbit />
        <span>Buy Again</span>
      </Link>
      <Link href="/explore" onClick={() => handleClick('explore')} className={`flex flex-col items-center no-underline ${active === 'explore' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-50'}`}>
        <Compass />
        <span>Explore</span>
      </Link>
      {
        status === "unauthenticated"?(
          <Link href="/login" onClick={() => handleClick('account')} className={`flex flex-col items-center no-underline ${active === 'account' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-50'}`}>
        <FaUser size={24} />
        <span>Account</span>
      </Link>
        ):(
          <Link href="/loged" onClick={() => handleClick('account')} className={`flex flex-col items-center no-underline ${active === 'account' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-50'}`}>
        <FaUser size={24} />
        <span>Account</span>
      </Link>
        )
      }
    </div>
  );
}
