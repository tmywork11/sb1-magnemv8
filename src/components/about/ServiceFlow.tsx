import React from 'react';
import { PhoneCall, ClipboardCheck, Users, Calendar } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const steps = [
  {
    icon: PhoneCall,
    title: '1. お問い合わせ',
    description: 'お電話またはメールにてご連絡ください。ご見学のご予約も承ります。'
  },
  {
    icon: ClipboardCheck,
    title: '2. 要介護認定',
    description: 'まだ要介護認定をお持ちでない方は、市区町村の窓口にてお手続きをお願いします。'
  },
  {
    icon: Users,
    title: '3. ケアプラン作成',
    description: 'ケアマネージャーと相談しながら、最適なケアプランを作成します。'
  },
  {
    icon: Calendar,
    title: '4. ご利用開始',
    description: 'ご希望の日程からサービスのご利用を開始していただけます。'
  }
];

export default function ServiceFlow() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="ご利用までの流れ"
          subtitle="スムーズなサービス開始のために"
        />
        
        <div className="mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-paper-100 p-8 rounded-xl h-full">
                  <step.icon className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-primary-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}