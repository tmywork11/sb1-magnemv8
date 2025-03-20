import React from 'react';
import { MapPin, Car, Clock } from 'lucide-react';

export default function AccessInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-lg font-medium">〒860-0084</p>
            <p className="text-gray-600">熊本県熊本市北区山室1丁目15番48号</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Car className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">駐車場</p>
            <p className="text-gray-600">専用駐車場完備</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium mb-2">営業時間</p>
            <ul className="text-gray-600 space-y-1">
              <li>月曜～土曜: 8:30 - 17:30</li>
              <li>日曜・祝日: 休業</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}