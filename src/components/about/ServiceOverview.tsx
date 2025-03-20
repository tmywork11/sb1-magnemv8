import React from 'react';
import { Shield, Heart, Users } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const features = [
  {
    icon: Shield,
    title: '安心の介護保険サービス',
    description: '介護保険の「通所介護（デイサービス）」適用施設として、質の高いケアを提供します。'
  },
  {
    icon: Heart,
    title: '個別対応の充実',
    description: 'お一人おひとりの状態や希望に合わせた、きめ細やかなケアプランを作成します。'
  },
  {
    icon: Users,
    title: '経験豊富なスタッフ',
    description: '介護のプロフェッショナルが、心を込めて対応いたします。'
  }
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="デイサービス憩について"
          subtitle="心地よい時間と笑顔あふれる空間をご提供します"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm">
              <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}