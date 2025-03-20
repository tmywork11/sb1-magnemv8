import React from 'react';
import { useInView } from '../../hooks/useInView';
import ServiceHighlight from '../ServiceHighlight';
import SectionHeader from '../common/SectionHeader';
import { coreServices } from '../../data/coreServices';

export default function CoreServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#1B315B] relative overflow-hidden">
      {/* 和紙のような質感のオーバーレイ */}
      <div className="absolute inset-0 opacity-10 bg-washi-pattern" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <SectionHeader
          title="主なサービス"
          subtitle="当事業所の特徴的なサービスをご紹介します"
          darkMode
        />
        
        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {coreServices.map((service, index) => (
            <ServiceHighlight
              key={service.title}
              {...service}
              delay={index * 200}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}