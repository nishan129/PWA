// components/frontend/BottomNavbar.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { Orbit, Store, Compass } from 'lucide-react';
import Loading from '@/app/loading';

export default function BottomNavbar() {
  const [active, setActive] = useState('home');
  const isLoggedIn = false; // Replace this with actual login check logic

  const handleClick = (button) => {
    setActive(button);
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-around dark:bg-slate-100 bg-slate-100 p-2 shadow-lg z-50">
      <Link
        href="/"
        onClick={() => handleClick('home')}
        className={`flex flex-col items-center no-underline ${active === 'home' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-700'}`}
      >
        <Store />
        <span>Home</span>
      </Link>
      <Link
        href="/buy-again"
        onClick={() => handleClick('buyAgain')}
        className={`flex flex-col items-center no-underline ${active === 'buyAgain' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-700'}`}
      >
        <Orbit />
        <span>Buy Again</span>
      </Link>
      <Link
        href="/explore"
        onClick={() => handleClick('explore')}
        className={`flex flex-col items-center no-underline ${active === 'explore' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-700'}`}
      >
        <Compass />
        <span>Explore</span>
      </Link>
      <Link
        href={isLoggedIn ? "/logged" : "/login"}
        onClick={() => handleClick('account')}
        className={`flex flex-col items-center no-underline ${active === 'account' ? 'text-green-500 border-green-500 border-t-2' : 'text-slate-700 dark:text-slate-700'}`}
      >
        <FaUser size={24} />
        <span>Account</span>
      </Link>
    </div>
  );
}
