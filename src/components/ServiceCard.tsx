import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  delay, 
  isVisible 
}: ServiceCardProps) {
  return (
    <div
      className={`bg-paper-50/90 backdrop-blur-sm rounded-xl p-8 shadow-sm transition-all duration-700 ease-out transform border border-[#447580] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
      } hover:shadow-md hover:-translate-y-1`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      <div 
        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 transition-transform duration-700 ease-out transform ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
        style={{ transitionDelay: `${delay + 100}ms` }}
      >
        <Icon className="h-8 w-8" />
      </div>
      <h3 
        className={`text-xl font-medium mb-4 text-primary-800 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        {title}
      </h3>
      <p 
        className={`text-primary-600 leading-relaxed transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
        style={{ transitionDelay: `${delay + 300}ms` }}
      >
        {description}
      </p>
    </div>
  );
}