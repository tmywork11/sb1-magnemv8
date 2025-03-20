import React from 'react';
import { Check, Minus, Star, Heart, Clock, Users } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

type RatingType = 'check' | 'partial';

interface ComparisonItemType {
  aspect: string;
  icon: typeof Heart | typeof Clock | typeof Users;
  ikoi: {
    description: string;
    details: string[];
    rating: RatingType;
  };
  others: {
    description: string;
    rating: RatingType;
  };
}

const comparisonData: ComparisonItemType[] = [
  {
    aspect: '対応時間',
    icon: Clock,
    ikoi: {
      description: '一人ひとりのペースに合わせた柔軟な対応',
      details: [
        '利用者様の生活リズムを尊重',
        '余裕を持った時間配分',
        '急な予定変更にも対応可能'
      ],
      rating: 'check'
    },
    others: {
      description: '決められた時間枠での対応',
      rating: 'partial'
    }
  }
  // ... 他のデータ
];

const RatingIcon = ({ rating, isVisible }: { rating: RatingType, isVisible: boolean }) => {
  const baseClasses = "transition-all duration-500 transform";
  const visibilityClasses = isVisible 
    ? "opacity-100 translate-y-0" 
    : "opacity-0 translate-y-4";

  if (rating === 'check') {
    return (
      <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 ${baseClasses} ${visibilityClasses}`}>
        <Check className="h-5 w-5 text-primary-600" />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 ${baseClasses} ${visibilityClasses}`}>
      <Minus className="h-5 w-5 text-gray-400" />
    </div>
  );
};

export default function ComparisonTable() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="space-y-8">
      {comparisonData.map((row, index) => {
        const Icon = row.icon;
        const delay = index * 200;
        
        return (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-700 transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {/* Content */}
          </div>
        );
      })}
    </div>
  );
}