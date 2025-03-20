import React from 'react';
import { NewsItemType } from '../../types';

interface NewsDetailProps {
  news: NewsItemType;
}

export default function NewsDetail({ news }: NewsDetailProps) {
  return (
    <article className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center space-x-4 mb-6">
        <time className="text-sm text-gray-500">
          {news.date}
        </time>
        <span className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
          {news.category}
        </span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        {news.title}
      </h1>

      <div className="prose prose-primary max-w-none">
        {/* ここにニュースの本文コンテンツが入ります */}
        <p className="text-gray-600 leading-relaxed">
          {news.content}
        </p>
      </div>
    </article>
  );
}