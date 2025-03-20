import React from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft } from 'lucide-react';
import NewsList from '../components/news/NewsList';
import SectionHeader from '../components/common/SectionHeader';

export default function NewsPage() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>トップページへ戻る</span>
          </a>
        </div>

        <SectionHeader
          title="お知らせ一覧"
          subtitle="デイサービス憩からの最新情報をお届けします"
        />

        <div ref={ref} className="mt-12">
          <NewsList />
        </div>
      </div>
    </main>
  );
}