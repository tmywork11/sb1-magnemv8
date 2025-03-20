import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

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
      className={cn(
        "bg-gray-50 rounded-xl p-8 shadow-sm transition-all duration-700 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        "hover:shadow-md hover:-translate-y-1"
      )}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      <div 
        className={cn(
          "inline-flex items-center justify-center w-16 h-16 rounded-full",
          "bg-blue-100 text-blue-600 mb-6",
          "transition-transform duration-700 ease-out transform",
          isVisible ? "scale-100" : "scale-0"
        )}
        style={{ transitionDelay: `${delay + 100}ms` }}
      >
        <Icon className="h-8 w-8" />
      </div>
      <h3 
        className={cn(
          "text-xl font-medium mb-4",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        )}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        {title}
      </h3>
      <p 
        className={cn(
          "text-gray-600 leading-relaxed",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}
        style={{ transitionDelay: `${delay + 300}ms` }}
      >
        {description}
      </p>
    </div>
  );
}