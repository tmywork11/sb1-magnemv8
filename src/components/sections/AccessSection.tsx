import React from 'react';
import { MapPin, Car, Clock, Phone, ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/QikRNXfQGdAgUdJ1A";

export default function AccessSection() {
  return (
    <section id="access" className="py-16 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="アクセス"
          subtitle="お気軽にお越しください"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[500px] bg-paper-50 rounded-lg overflow-hidden shadow-sm group relative">
            {/* 地図の代替画像 */}
            <div className="absolute inset-0 bg-[url('/images/map-placeholder.svg')] bg-center bg-cover">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
            
            {/* マーカー表示 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="h-8 w-8 text-primary-600" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full animate-ping" />
              </div>
            </div>
            
            {/* Google Mapsへのリンク */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-primary-950/0 hover:bg-primary-950/30 transition-colors duration-300"
            >
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-medium text-primary-600">Google マップで見る</span>
                <ExternalLink className="h-4 w-4 text-primary-600" />
              </div>
            </a>
          </div>
          
          <div className="space-y-8">
            {/* 所在地 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium">〒860-0084</p>
                  <p className="text-gray-600">熊本県熊本市北区山室1丁目15番48号</p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mt-2"
                  >
                    <span>経路を調べる</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* 連絡先情報 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-2">お電話・FAX</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>
                      <a href="tel:096-341-3501" className="hover:text-primary-600 transition-colors">
                        TEL: 096-341-3501
                      </a>
                    </li>
                    <li>FAX: 096-341-3502</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 営業時間 */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-2">営業時間</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>月曜～土曜: 8:30 - 17:30</li>
                    <li>日曜・祝日: 休業</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 交通アクセス */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Car className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-2">交通アクセス</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>熊本電鉄「北熊本駅」から徒歩15分</li>
                    <li>バス停「山室町」から徒歩3分</li>
                    <li>駐車場完備</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}