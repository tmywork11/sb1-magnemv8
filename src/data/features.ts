import { Bath, Activity, Clock } from 'lucide-react';
import { FeatureType } from '../types';

export const features: FeatureType[] = [
  {
    icon: Bath,
    title: 'プライバシーを重視した個別入浴',
    description: '一人ひとりのペースに合わせた、ゆったりとした入浴時間を提供します。専門スタッフが安全に配慮しながらサポートいたします。',
  },
  {
    icon: Activity,
    title: '専門スタッフによる個別リハビリ',
    description: '経験豊富な専門スタッフが、個々の状態に合わせたリハビリプログラムを作成。目標に向かって一緒に取り組みます。',
  },
  {
    icon: Clock,
    title: '利用者ごとの柔軟なスケジュール',
    description: 'お一人おひとりの生活リズムや希望に合わせて、柔軟な利用時間の調整が可能です。ご要望に応じて対応いたします。',
  },
];