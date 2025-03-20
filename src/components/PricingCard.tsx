import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlanType } from '../types';

export default function PricingCard({ title, price, features, isPopular }: PricingPlanType) {
  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
      isPopular ? 'ring-2 ring-blue-500' : ''
    }`}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-t-xl text-center">
          おすすめプラン
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500">/月</span>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}