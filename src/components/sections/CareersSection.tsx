import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const INDEED_URL = 'https://jp.indeed.com/cmp/%E3%83%87%E3%82%A4%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9-%E6%86%A9';

export default function CareersSection() {
  return (
    <section id="careers" className="relative py-24 text-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80"
          alt="握手を交わす手"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>
      
      <div className="relative max-w-3xl mx-auto px-4">
        <SectionHeader
          title="採用情報"
          subtitle="私たちと一緒に、高齢者の方々の生活をより豊かにする仕事をしませんか？"
          darkMode
        />
        
        <p className="text-gray-200 mb-8">
          経験者はもちろん、未経験でも熱意のある方を歓迎します。
          充実した研修制度で、あなたの成長をサポートします。
        </p>
        
        <a
          href={INDEED_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-1"
        >
          <span className="text-lg font-medium">Indeedで募集要項を見る</span>
          <ArrowUpRight className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}