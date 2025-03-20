import React from 'react';
import ServiceOverview from '../about/ServiceOverview';
import ServiceFlow from '../about/ServiceFlow';
import FAQ from '../about/FAQ';
import StartGuide from '../about/StartGuide';

export default function AboutSection() {
  return (
    <section id="about">
      <ServiceOverview />
      <ServiceFlow />
      <FAQ />
      <StartGuide />
    </section>
  );
}