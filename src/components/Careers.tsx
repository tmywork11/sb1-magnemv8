import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
  return (
    <section className="relative py-24 text-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
          alt="介護スタッフ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      
      <div className="relative max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">採用情報</h2>
        <p className="text-lg text-gray-200 mb-4">
          私たちと一緒に、高齢者の方々の生活をより豊かにする仕事をしませんか？
        </p>
        <p className="text-gray-200 mb-8">
          経験者はもちろん、未経験でも熱意のある方を歓迎します。
          充実した研修制度で、あなたの成長をサポートします。
        </p>
        
        <button className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1">
          <span className="text-lg font-medium">詳しい応募要件を見る</span>
          <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}