import React from 'react';
import ServicesList from './ServicesList';
import SectionHeader from '../common/SectionHeader';

export default function ServiceFeatures() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="私たちのデイケアサービスの特長"
          subtitle="当施設が選ばれる理由を分かりやすくご紹介します。"
        />
        <ServicesList />
      </div>
    </section>
  );
}