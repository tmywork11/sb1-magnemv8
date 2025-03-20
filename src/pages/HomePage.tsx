import React from 'react';
import Hero from '../components/Hero';
import NewsSection from '../components/news/NewsSection';
import CoreServicesSection from '../components/services/CoreServicesSection';
import ServicesSection from '../components/services/ServicesSection';
import DailySchedule from '../components/schedule/DailySchedule';
import Pricing from '../components/Pricing';
import CareersSection from '../components/sections/CareersSection';
import DocumentsSection from '../components/documents/DocumentsSection';
import AccessSection from '../components/sections/AccessSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NewsSection />
      <CoreServicesSection />
      <ServicesSection />
      <DailySchedule />
      <Pricing />
      <CareersSection />
      <DocumentsSection />
      <AccessSection />
    </main>
  );
}