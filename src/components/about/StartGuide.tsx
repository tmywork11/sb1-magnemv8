import React from 'react';
import { Mail, Phone } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function StartGuide() {
  const handleEmailClick = () => {
    const email = 'day.ikoi.3413501@gmail.com';
    const subject = encodeURIComponent('デイサービス憩 見学申込');
    const body = encodeURIComponent('見学を希望します。\n\n希望日時：\nお名前：\n連絡先：');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="ご利用開始について"
          subtitle="まずは見学からお気軽にどうぞ"
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-paper-100 p-8 rounded-xl text-center">
            <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">お電話でのお問い合わせ</h3>
            <p className="text-gray-600 mb-6">
              月曜～土曜 8:30〜17:30 にて受付しております
            </p>
            <a
              href="tel:096-341-3501"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              096-341-3501
            </a>
          </div>
          
          <div className="bg-paper-100 p-8 rounded-xl text-center">
            <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">メールでのお問い合わせ</h3>
            <p className="text-gray-600 mb-6">
              24時間受付中。内容確認後、担当者よりご連絡いたします
            </p>
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              メールフォームを開く
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}