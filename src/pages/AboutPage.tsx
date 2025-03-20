import React from 'react';
import ServiceOverview from '../components/about/ServiceOverview';
import ServiceFlow from '../components/about/ServiceFlow';
import FAQ from '../components/about/FAQ';
import StartGuide from '../components/about/StartGuide';

export default function AboutPage() {
  return (
    <main className="pt-16">
      <ServiceOverview />
      <ServiceFlow />
      <FAQ />
      <StartGuide />
    </main>
  );
}