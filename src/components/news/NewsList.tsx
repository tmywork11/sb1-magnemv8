import React from 'react';
import { useInView } from '../../hooks/useInView';
import NewsItem from './NewsItem';
import { NewsItemType } from '../../types';

interface NewsListProps {
  news: NewsItemType[];
}

export default function NewsList({ news }: NewsListProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="space-y-4">
      {news.map((item, index) => (
        <div
          key={item.id}
          className={`transform transition-all duration-500 ${
            inView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <NewsItem {...item} />
        </div>
      ))}
    </div>
  );
}