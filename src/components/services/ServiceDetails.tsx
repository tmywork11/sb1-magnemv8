import React from 'react';
import { Clock, Users, Activity, Heart } from 'lucide-react';

const serviceDetails = [
  {
    icon: Clock,
    title: '利用時間',
    content: [
      '月曜～土曜 8:30-17:30',
      '半日型・1日型から選択可能',
      '送迎時間は応相談'
    ]
  },
  {
    icon: Users,
    title: '対象者',
    content: [
      '要介護1～5の認定を受けた方',
      '要支援1・2の認定を受けた方',
      '事業対象者の方'
    ]
  },
  {
    icon: Activity,
    title: '主なサービス内容',
    content: [
      '健康チェック・機能訓練',
      '入浴・食事・送迎',
      'レクリエーション活動',
      '季節の行事'
    ]
  },
  {
    icon: Heart,
    title: '利用条件',
    content: [
      '介護保険被保険者証をお持ちの方',
      'かかりつけ医からの利用許可がある方',
      '送迎範囲内にお住まいの方'
    ]
  }
];

export default function ServiceDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {serviceDetails.map((detail) => {
        const Icon = detail.icon;
        return (
          <div key={detail.title} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary-50 rounded-lg">
                <Icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-800">{detail.title}</h3>
            </div>
            <ul className="space-y-2">
              {detail.content.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                  <span className="text-primary-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}