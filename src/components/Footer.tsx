import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">デイサービス憩.</h3>
            <p className="text-sm">
              くつろげる居場所でのびのびと。
              一人ひとりに寄り添った介護サービスを提供いたします。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">メニュー</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white">初めての方へ</a></li>
              <li><a href="#services" className="hover:text-white">サービス</a></li>
              <li><a href="#pricing" className="hover:text-white">利用料金</a></li>
              <li><a href="#careers" className="hover:text-white">採用情報</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">お問い合わせ</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:day.ikoi.3413501@gmail.com" className="hover:text-white">
                  day.ikoi.3413501@gmail.com
                </a>
              </li>
              <li>TEL: 096-341-3501</li>
              <li>FAX: 096-341-3502</li>
              <li>営業時間: 月曜～土曜 8:30-17:30</li>
              <li>（日曜・祝日休業）</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">所在地</h4>
            <p>〒860-0084</p>
            <p>熊本県熊本市北区山室1丁目15番48号</p>
            <div className="mt-4">
              <h5 className="text-white font-medium mb-2">事業所番号</h5>
              <ul className="space-y-1 text-sm">
                <li>通所介護（熊本市）: 4370116073</li>
                <li>総合事業（熊本市）: 4390102947</li>
                <li>総合事業（合志市）: 4390102947</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© 2024 デイサービス憩. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}