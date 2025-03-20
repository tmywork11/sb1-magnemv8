import { Car, Activity, Users, Bath, Coffee, Heart } from 'lucide-react';
import { ScheduleItemType } from '../types';

export const scheduleItems: ScheduleItemType[] = [
  {
    time: '09:00',
    title: '到着・健康チェック',
    description: 'バイタルチェック、体調確認',
    icon: Heart
  },
  {
    time: '09:30',
    title: 'リハビリ',
    description: '個別機能訓練の実施',
    icon: Activity
  },
  {
    time: '10:30',
    title: '趣味活動',
    description: '創作活動や脳トレーニングなど',
    icon: Users
  },
  {
    time: '11:30',
    title: '食事',
    description: '嚥下機能に合わせた食事',
    icon: Coffee
  },
  {
    time: '12:30',
    title: '健康・バイタルチェック',
    description: '午後利用者様の体調確認',
    icon: Heart
  },
  {
    time: '13:00',
    title: '午後の活動',
    description: '趣味活動やリハビリなど',
    icon: Activity
  },
  {
    time: '15:00',
    title: 'おやつの時間',
    description: 'バラエティー豊かなおやつの提供',
    icon: Coffee
  },
  {
    time: '16:00',
    title: 'お送り',
    description: 'ご自宅までの送迎サービス',
    icon: Car
  }
];