import React from 'react';
import ServiceHighlight from './ServiceHighlight';
import { coreServices } from '../../data/coreServices';
import SectionHeader from '../common/SectionHeader';

export default function ServiceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="3つの特徴的なサービス"
          subtitle="一人ひとりに寄り添った、きめ細やかなサービスを提供いたします"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <ServiceHighlight
              key={service.title}
              {...service}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}