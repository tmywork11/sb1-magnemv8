import React from 'react';
import { useInView } from '../hooks/useInView';
import ServiceCard from './ServiceCard';
import SectionHeader from './common/SectionHeader';
import { serviceFeatures } from '../data/serviceFeatures';

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="section-spacing bg-gradient-to-b from-paper-100 to-paper-200">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="当事業所のこだわり"
          subtitle="一人ひとりに寄り添った、きめ細やかなサービスを提供いたします"
        />
        
        <div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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