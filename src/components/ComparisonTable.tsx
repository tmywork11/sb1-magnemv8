import React from 'react';
import { Check, Minus } from 'lucide-react';

const comparisonData = [
  {
    aspect: 'サービス提供時間',
    individual: '利用者様のペースに合わせて柔軟に対応',
    group: '決められた時間枠での提供',
    groupRating: 'partial'
  },
  {
    aspect: 'ケアの特徴',
    individual: '一人ひとりの状態に合わせたきめ細かなケア',
    group: '複数の利用者様に対する標準的なケア',
    groupRating: 'partial'
  },
  {
    aspect: 'コミュニケーション',
    individual: '十分な時間をかけた丁寧な対応',
    group: '限られた時間での対応',
    groupRating: 'partial'
  },
];

const RatingIcon = ({ rating }: { rating: 'check' | 'partial' }) => {
  if (rating === 'check') {
    return <Check className="h-5 w-5 text-primary-600" />;
  }
  return <Minus className="h-5 w-5 text-primary-400" />;
};

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl bg-paper-50/90 backdrop-blur-sm shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 bg-paper-200/50 border-b-2 border-primary-200"></th>
            <th className="p-4 bg-primary-50/50 border-b-2 border-primary-200 text-primary-800">
              <div className="text-lg font-semibold">個別対応</div>
              <div className="text-sm text-primary-600">デイサービス憩の特徴</div>
            </th>
            <th className="p-4 bg-paper-200/50 border-b-2 border-primary-200 text-primary-600">
              <div className="text-lg font-semibold">集団対応</div>
              <div className="text-sm">一般的なサービス</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index} className="border-b border-primary-100">
              <td className="p-4 bg-paper-200/30 font-medium text-primary-700">{row.aspect}</td>
              <td className="p-4 bg-primary-50/30">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                  <span className="text-primary-700">{row.individual}</span>
                </div>
              </td>
              <td className="p-4 bg-paper-200/30">
                <div className="flex items-center text-primary-600">
                  <RatingIcon rating={row.groupRating} />
                  <span className="ml-2">{row.group}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}