import React from 'react';
import Layout from '../components/Layout';
import Features from '../components/Features';

export default function AboutPage() {
  return (
    <Layout>
      <main className="pt-20">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">私たちについて</h1>
            <Features />
          </div>
        </section>
      </main>
    </Layout>
  );
}