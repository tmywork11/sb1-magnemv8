import React, { useState, useMemo } from 'react';
import { useInView } from '../../hooks/useInView';
import SectionHeader from '../common/SectionHeader';
import { scheduleItems } from '../../data/scheduleItems';
import { ScheduleType } from '../../types';
import { cn } from '../../utils/cn';

export default function DailySchedule() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [scheduleType, setScheduleType] = useState<ScheduleType>('full');

  const filteredSchedule = useMemo(() => {
    return scheduleItems.filter(item => {
      const hour = parseInt(item.time.split(':')[0]);
      switch (scheduleType) {
        case 'morning':
          return hour >= 0 && hour < 12;
        case 'afternoon':
          return hour >= 12 && hour <= 24;
        default:
          return true;
      }
    });
  }, [scheduleType]);

  const scheduleTypes = [
    { id: 'full', label: '全日' },
    { id: 'morning', label: '午前' },
    { id: 'afternoon', label: '午後' }
  ] as const;

  return (
    <section className="py-24 bg-[#1B315B] relative overflow-hidden">
      {/* 和紙のような質感のオーバーレイ */}
      <div className="absolute inset-0 opacity-10 bg-washi-pattern" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <SectionHeader
          title="1日のスケジュール"
          subtitle="ご利用者様お一人おひとりのペースを大切にしながら、充実した1日をお過ごしいただけます"
          darkMode
        />

        {/* スケジュールタイプ切り替えボタン */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
            {scheduleTypes.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setScheduleType(id)}
                className={cn(
                  "px-8 py-3 rounded-md text-lg font-medium transition-all duration-200",
                  "relative",
                  scheduleType === id
                    ? "text-primary-800 bg-white shadow-sm"
                    : "text-white hover:text-white/80"
                )}
              >
                {label}
                {scheduleType === id && (
                  <div
                    className="absolute inset-0 bg-white rounded-md animate-fadeIn"
                    style={{ zIndex: -1 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* タイムライン */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2" />

          {/* スケジュールアイテム */}
          <div className="space-y-12">
            {filteredSchedule.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const delay = index * 100;

              return (
                <div
                  key={item.time}
                  className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-4 md:gap-8`}
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease-out',
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {/* コンテンツボックス */}
                  <div className={`w-1/2 ${isLeft ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`inline-block bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-white/10 transition-transform duration-300 hover:-translate-y-1 w-full max-w-md ${
                        isLeft ? 'ml-auto' : 'mr-auto'
                      }`}
                    >
                      <div className={`flex items-center space-x-4 ${isLeft ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className="p-3 bg-primary-50 rounded-lg">
                          <Icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-bold text-xl text-primary-800 mb-1">{item.time}</div>
                          <div className="font-medium text-lg text-primary-700">{item.title}</div>
                          <div className="text-base text-primary-600 mt-1">{item.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 中央のドット */}
                  <div className="relative flex-shrink-0 w-4">
                    <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* 空のスペース（反対側） */}
                  <div className="w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}