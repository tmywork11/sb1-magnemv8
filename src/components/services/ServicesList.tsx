import React, { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import ServiceCard from './ServiceCard';
import { serviceFeatures } from '../../data/serviceFeatures';
import MoreServicesButton from './MoreServicesButton';

export default function ServicesList() {
  const [visibleCount, setVisibleCount] = useState(1);
  const { ref, inView } = useInView({ 
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
    rootMargin: '50px 0px',
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setVisibleCount(prev => {
          if (prev < serviceFeatures.length) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 200);

      return () => clearInterval(timer);
    } else {
      setVisibleCount(1);
    }
  }, [inView]);

  return (
    <>
      <div 
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {serviceFeatures.map((feature, index) => (
          <ServiceCard
            key={feature.title}
            {...feature}
            delay={index * 150}
            isVisible={index < visibleCount}
          />
        ))}
      </div>
      <MoreServicesButton />
    </>
  );
}