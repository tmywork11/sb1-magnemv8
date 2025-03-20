import React from 'react';
import { Mail } from 'lucide-react';

const EMAIL = 'day.ikoi.3413501@gmail.com';

export default function ContactButton() {
  const handleClick = () => {
    const subject = encodeURIComponent('デイサービス憩 見学申込');
    const body = encodeURIComponent('見学を希望します。\n\n希望日時：\nお名前：\n連絡先：');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center space-x-2 bg-paper-100 text-primary-600 px-6 py-2.5 rounded-lg hover:bg-paper-200 transition-all duration-200 shadow-sm hover:shadow"
    >
      <Mail className="h-4 w-4" />
      <span className="text-sm font-medium">見学申込</span>
    </button>
  );
}