import React from 'react';
import { useInView } from '../../hooks/useInView';
import ServiceCard from './ServiceCard';
import { serviceFeatures } from '../../data/serviceFeatures';
import MoreServicesButton from './MoreServicesButton';

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          私たちのデイケアサービス
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          一人ひとりに寄り添った、きめ細やかなサービスを提供いたします
        </p>
        
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {serviceFeatures.map((service, index) => (
            <ServiceCard
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