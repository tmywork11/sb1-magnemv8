import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MoreServicesButton() {
  return (
    <div className="text-center">
      <button className="group inline-flex items-center px-6 py-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200">
        <span className="font-medium">詳しいサービスを見る</span>
        <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
}