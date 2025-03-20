import React from 'react';
import Layout from '../components/Layout';
import Services from '../components/services/Services';
import ServiceFeatures from '../components/services/ServiceFeatures';

export default function ServicesPage() {
  return (
    <Layout>
      <main className="pt-20">
        <Services />
        <ServiceFeatures />
      </main>
    </Layout>
  );
}