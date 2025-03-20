import React from 'react';
import { useInView } from '../../hooks/useInView';
import ServiceCard from '../ServiceCard';
import SectionHeader from '../common/SectionHeader';
import { serviceFeatures } from '../../data/serviceFeatures';

export default function FeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#447580] relative overflow-hidden">
      {/* 和紙のような質感のオーバーレイ */}
      <div className="absolute inset-0 opacity-10 bg-washi-pattern" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <SectionHeader
          title="当事業所のこだわり"
          subtitle="一人ひとりに寄り添った、きめ細やかなサービスを提供いたします"
          darkMode
        />
        
        <div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {serviceFeatures.map((feature, index) => (
            <ServiceCard
              key={feature.title}
              {...feature}
              delay={index * 150}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}