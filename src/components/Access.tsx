import React from 'react';
import { MapPin, Phone, Car } from 'lucide-react';
import AccessInfo from './AccessInfo';

export default function Access() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">アクセス</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398542!2d139.76454987677586!3d35.68124053757067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1709004023467!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          
          <AccessInfo />
        </div>
      </div>
    </section>
  );
}