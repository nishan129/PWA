import React from 'react';
import Navbar from '@/components/frontend/Navbar';
import BottomNavbar from '@/components/frontend/BottomNavbar';


export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto bg-slate-200">
      <Navbar />
      {/* <Hero /> */}
      <div className="max-w-7xl mx-auto py-24" style={{marginTop: 12}}>
        {children}
      </div>
      <nav className="bottom-navbar">
      <BottomNavbar />
      </nav>
    </div>
  );
}
