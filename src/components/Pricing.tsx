import React from 'react';
import { FileText, Info, User } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

interface PriceExample {
  persona: {
    name: string;
    age: number;
    careLevel: string;
    situation: string;
  };
  usage: {
    type: string;
    time: string;
    services: string[];
  };
  costs: {
    serviceFee: string;
    insuranceCost: string;
    mealCost: string;
    totalCost: string;
  }
}

const priceExamples: PriceExample[] = [
  {
    persona: {
      name: "Aさん",
      age: 82,
      careLevel: "要介護3",
      situation: "午前中のみの利用を希望され、主に機能訓練と入浴を目的に利用"
    },
    usage: {
      type: "半日利用",
      time: "9:00～12:00",
      services: [
        "送迎サービス",
        "入浴サービス",
        "個別機能訓練"
      ]
    },
    costs: {
      serviceFee: "4,790円",
      insuranceCost: "479円",
      mealCost: "0円",
      totalCost: "479円"
    }
  },
  {
    persona: {
      name: "Bさん",
      age: 78,
      careLevel: "要介護2",
      situation: "ご家族と同居されており、日中の活動と機能訓練を目的に利用"
    },
    usage: {
      type: "1日利用",
      time: "9:00～16:00",
      services: [
        "送迎サービス",
        "入浴サービス",
        "個別機能訓練",
        "昼食"
      ]
    },
    costs: {
      serviceFee: "7,770円",
      insuranceCost: "777円",
      mealCost: "700円",
      totalCost: "1,477円"
    }
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="料金のご案内"
          subtitle="実際の利用例をもとに、料金の目安をご紹介いたします"
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {priceExamples.map((example) => (
            <div 
              key={example.persona.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
            >
              {/* 利用者プロフィール */}
              <div className="bg-primary-600 p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{example.persona.name}（{example.persona.age}歳）</h3>
                    <p className="text-primary-50">介護度：{example.persona.careLevel}</p>
                  </div>
                </div>
                <p className="text-sm text-primary-50">{example.persona.situation}</p>
              </div>

              {/* 利用内容 */}
              <div className="p-6 bg-primary-50/50">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">利用形態</span>
                    <span className="text-primary-600 font-bold">{example.usage.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">利用時間</span>
                    <span className="text-primary-600">{example.usage.time}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-primary-600">ご利用サービス：</p>
                  <ul className="text-sm space-y-1">
                    {example.usage.services.map((service, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 料金詳細 */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">サービス費用</span>
                    <span>{example.costs.serviceFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">保険負担（1割）</span>
                    <span className="font-medium">{example.costs.insuranceCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">食事代</span>
                    <span>{example.costs.mealCost}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-bold">1日あたりの自己負担</span>
                    <span className="text-xl font-bold text-primary-600">{example.costs.totalCost}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 注意事項 */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 text-sm text-primary-800">
                <p>※ 上記は一例です。実際の料金は介護度や利用時間、オプションサービスにより異なります。</p>
                <p>※ 介護保険サービスの自己負担額は、所得に応じて1割から3割となります。</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 料金表ダウンロード */}
        <div className="text-center mt-12">
          <a
            href="https://817efabf-c3b1-4e34-a878-82551eacbd88.filesusr.com/ugd/be2235_14a8347f936c443ca43c4ade93d16947.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:-translate-y-1"
          >
            <FileText className="h-5 w-5 mr-2" />
            詳しい料金表をダウンロード (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}