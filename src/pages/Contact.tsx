import React from 'react';
import Layout from '../components/Layout';
import Access from '../components/Access';

export default function ContactPage() {
  return (
    <Layout>
      <main className="pt-20">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">お問い合わせ</h1>
            <Access />
          </div>
        </section>
      </main>
    </Layout>
  );
}