import React, { useState, useEffect } from 'react';
import HeroSlide from './HeroSlide';
import { heroSlides } from '../config/site';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] h-[100svh]">
      {heroSlides.map((slide, index) => (
        <HeroSlide
          key={slide.imageUrl}
          {...slide}
          isActive={currentSlide === index}
        />
      ))}
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="relative flex items-center h-full">
            <h1 className="vertical-text text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-relaxed tracking-wider ml-8 sm:ml-16 md:ml-24">
              くつろげる
              <br />
              居場所で
              <br />
              のびのびと
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`スライド ${index + 1} へ移動`}
          />
        ))}
      </div>
    </section>
  );
}