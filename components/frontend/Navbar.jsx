import React from 'react';
import SearchForm from './SearchForm';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { ShoppingCart, User } from 'lucide-react';
import ThemeSwitcherBtn from '../ThemeSwitcherBtn';
import Hero from '@/components/frontend/Hero';
import CartCount from './CartCount';

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 z-50 bg-green-300 dark:bg-green-300 shadow-lg rounded-br-lg rounded-bl-lg">
      <div className="flex items-center justify-between py-4 max-w-7xl mx-auto px-8 gap-4">
        {/* Search */}
        <Link href={"/search"} className="flex-grow">
          <SearchForm />
        </Link>

        <div className="flex gap-4">

          <CartCount />
          {/* <ThemeSwitcherBtn /> */}
         
        </div>
      </div>
      <div className='relative'>
      {/* <Hero /> */}
      </div>
    </div>
  );
}
