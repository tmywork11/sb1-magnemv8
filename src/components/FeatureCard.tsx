import React from 'react';
import { LucideIcon } from 'lucide-react';
import { FeatureType } from '../types';

interface FeatureCardProps extends FeatureType {
  delay: number;
  isVisible: boolean;
}

export default function FeatureCard({ icon: Icon, title, description, delay, isVisible }: FeatureCardProps) {
  return (
    <div
      className={`text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}