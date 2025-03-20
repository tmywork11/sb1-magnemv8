import React from 'react';
import { useInView } from '../hooks/useInView';
import ComparisonTable from './features/ComparisonTable';
import SectionHeader from './common/SectionHeader';

export default function Features() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#1B315B] relative overflow-hidden">
      {/* 和紙のような質感のオーバーレイ */}
      <div className="absolute inset-0 opacity-10 bg-washi-pattern" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <SectionHeader
          title="私たちの強み"
          subtitle="当事業所では、お一人おひとりに寄り添った個別対応を大切にしています"
          darkMode
        />

        <div className="mb-16 bg-paper-50/80 rounded-xl p-8 shadow-sm backdrop-blur-sm">
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
}