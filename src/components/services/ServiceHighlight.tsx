import React from 'react';
import { useInView } from '../../hooks/useInView';
import ServiceIcon from './ServiceIcon';
import { ServiceHighlightProps } from '../../types/services';

export default function ServiceHighlight({ title, icon, delay }: ServiceHighlightProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const getIconType = () => {
    if (title.includes('おひとり湯')) return 'bath';
    if (title.includes('リハビリ')) return 'activity';
    return 'clock';
  };

  return (
    <div
      ref={ref}
      className={`text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <ServiceIcon type={getIconType()} className="mb-6" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">
        {title === 'おひとり湯' && 'プライバシーを重視した、ゆったりとした入浴時間をご提供します。'}
        {title === 'マンツーマンリハビリ' && '専門スタッフによる、きめ細やかなリハビリテーションを実施します。'}
        {title === '選べるサービス時間' && 'ご利用者様のライフスタイルに合わせて、柔軟な時間設定が可能です。'}
      </p>
    </div>
  );
}