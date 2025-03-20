import React from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { Disclosure } from '@headlessui/react';

const faqs = [
  {
    question: '利用にあたって介護保険は必要ですか？',
    answer: 'はい、介護保険の「要介護認定」が必要です。まだ認定をお持ちでない方は、お住まいの市区町村窓口でお手続きをお願いいたします。'
  },
  {
    question: '送迎は行っていますか？',
    answer: 'はい、ご自宅までの送迎サービスを行っています。送迎範囲や時間についてはお問い合わせください。'
  },
  {
    question: '見学は可能ですか？',
    answer: 'はい、事前予約制で施設見学を承っております。お気軽にお問い合わせください。'
  },
  {
    question: '食事の対応は可能ですか？',
    answer: 'はい、アレルギーや嚥下状態に応じた食事提供が可能です。事前にご相談ください。'
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeader
          title="よくあるご質問"
          subtitle="お客様からよくいただくご質問にお答えします"
        />
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <Disclosure key={faq.question}>
              {({ open }) => (
                <div className="bg-white rounded-lg shadow-sm">
                  <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center">
                    <span className="text-lg font-medium">{faq.question}</span>
                    {open ? (
                      <Minus className="h-5 w-5 text-primary-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary-600" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}