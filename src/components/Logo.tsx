import React from 'react';
import { siteConfig } from '../config/site';

interface LogoProps {
  isScrolled: boolean;
}

export default function Logo({ isScrolled }: LogoProps) {
  return (
    <a href="/" className="flex items-center space-x-3">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden transition-colors duration-200 ${
        isScrolled ? 'bg-white' : 'bg-white/10'
      }`}>
        <img 
          src={siteConfig.logo.imageUrl} 
          alt={siteConfig.logo.alt}
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className={`text-xl font-bold transition-colors duration-200 ${
        isScrolled ? 'text-primary-600' : 'text-white'
      }`}>
        {siteConfig.name}
      </h1>
    </a>
  );
}