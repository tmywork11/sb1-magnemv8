import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NewsItemType } from '../types';

export default function NewsItem({ date, category, title }: NewsItemType) {
  return (
    <div className="flex items-center space-x-6 py-4 px-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-all duration-200 cursor-pointer group">
      <span className="text-sm text-gray-500 w-24 flex-shrink-0">
        {date}
      </span>
      <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full w-20 text-center flex-shrink-0">
        {category}
      </span>
      <span className="text-gray-900 group-hover:text-blue-600 transition-colors duration-200 flex-grow">
        {title}
      </span>
      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0" />
    </div>
  );
}