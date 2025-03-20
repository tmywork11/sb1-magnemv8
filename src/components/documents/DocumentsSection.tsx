import React from 'react';
import { FileText } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const documents = [
  {
    category: 'サービスの利用にあたって',
    files: [
      {
        title: 'サービスのご利用時間',
        url: 'https://817efabf-c3b1-4e34-a878-82551eacbd88.filesusr.com/ugd/be2235_97c8e3e968914b2aa100feed370e66ca.pdf'
      },
      {
        title: '運営規定',
        url: 'https://817efabf-c3b1-4e34-a878-82551eacbd88.filesusr.com/ugd/be2235_72d6d77b7b8a4957afc510105ac5e3ef.pdf'
      },
      {
        title: '私たちの取り組みについて',
        url: 'https://817efabf-c3b1-4e34-a878-82551eacbd88.filesusr.com/ugd/be2235_f91b51b83d4449d7b66f804d86e42d7b.pdf'
      }
    ]
  },
  {
    category: 'お申込みの方へ',
    files: [
      {
        title: '個人情報使用説明書',
        url: 'https://817efabf-c3b1-4e34-a878-82551eacbd88.filesusr.com/ugd/be2235_53d864a037e94c038a4421340d992488.pdf'
      },
      {
        title: '重要事項説明書',
        url: 'https://817efabf-c3b1-4e34-a878-82551eacbd88.filesusr.com/ugd/be2235_1ecd36272a05457291b151d7b280570a.pdf'
      }
    ]
  }
];

export default function DocumentsSection() {
  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader
          title="書類ダウンロード"
          subtitle="各種申込書類をご用意しております"
        />
        
        <div className="mt-12 space-y-12">
          {documents.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold text-primary-800 mb-6">
                {category.category}
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {category.files.map((file) => (
                  <a
                    key={file.url}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="mr-4 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors duration-200">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {file.title}
                      </p>
                      <p className="text-sm text-gray-500">PDFをダウンロード</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}