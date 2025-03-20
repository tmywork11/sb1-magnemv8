import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ContactButton from './ContactButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-primary-600'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo isScrolled={isScrolled} />
          <div className="hidden lg:flex items-center space-x-12">
            <Navigation isScrolled={isScrolled} />
            <ContactButton />
          </div>
          
          <button className={`lg:hidden p-2 rounded-lg ${
            isScrolled ? 'text-primary-600 hover:bg-gray-100' : 'text-white hover:bg-primary-500'
          }`}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}