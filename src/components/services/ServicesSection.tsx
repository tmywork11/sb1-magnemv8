import React from 'react';
import { Heart, Activity, Users, Coffee, Clock } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const services = [
  {
    icon: Heart,
    title: '個別ケア',
    description: '一人ひとりの状態や希望に合わせた、きめ細やかなケアプランを作成します。ご利用者様の生活リズムを大切にしながら、必要なサポートを提供いたします。',
  },
  {
    icon: Activity,
    title: '機能訓練',
    description: '専門スタッフによる個別機能訓練を実施。日常生活の動作改善や身体機能の維持・向上を目指します。ご自宅での生活がより快適になるようサポートいたします。',
  },
  {
    icon: Users,
    title: '趣味活動',
    description: '季節の行事や創作活動、脳トレーニングなど、楽しみながら心身機能の維持・向上を図れるプログラムをご用意。仲間との交流を通じて、活気ある日々を過ごしていただけます。',
  },
  {
    icon: Coffee,
    title: '食事・おやつ',
    description: '栄養バランスの取れた食事を提供。嚥下状態に応じた食事形態の調整や、アレルギーにも対応いたします。季節を感じられるメニューもご用意しております。',
  },
  {
    icon: Clock,
    title: '送迎サービス',
    description: 'ご自宅までの送迎を行っております。安全で快適な送迎を心がけ、ご家族様の負担軽減にも配慮いたします。',
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="サービスのご案内"
          subtitle="ご利用者様の自立した日常生活をサポートいたします"
        />
        
        <div className="mt-16 space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* イメージボックス */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-2xl bg-[#1B315B] p-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-[1.02]">
                    <Icon className="w-24 h-24 text-white/90" />
                  </div>
                </div>

                {/* サービス説明 */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-paper-50 rounded-2xl p-8 shadow-sm border border-primary-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}