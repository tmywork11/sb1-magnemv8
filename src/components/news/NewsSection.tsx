import React from 'react';
import { ChevronRight } from 'lucide-react';
import NewsList from './NewsList';
import SectionHeader from '../common/SectionHeader';
import { newsItems } from '../../data/newsItems';

export default function NewsSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">お知らせ</h2>
          <a
            href="/news"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            お知らせ一覧
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        <NewsList news={newsItems} />
      </div>
    </section>
  );
}