import React from 'react';
import ServiceIcon from './services/ServiceIcon';

interface ServiceHighlightProps {
  title: string;
  icon: any;
  delay: number;
  isVisible: boolean;
}

export default function ServiceHighlight({ title, icon, delay, isVisible }: ServiceHighlightProps) {
  const getIconType = () => {
    if (title.includes('おひとり湯')) return 'bath';
    if (title.includes('リハビリ')) return 'activity';
    return 'clock';
  };

  return (
    <div
      className={`text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <ServiceIcon type={getIconType()} className="mb-6" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}