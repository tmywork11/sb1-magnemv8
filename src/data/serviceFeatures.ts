import { Heart, Bath, Activity, Utensils, Users, Clock } from 'lucide-react';
import { ServiceFeatureType } from '../types';

export const serviceFeatures: ServiceFeatureType[] = [
  {
    icon: Bath,
    title: 'プライベート空間の確保',
    description: 'おひとり様の入浴時間を確保し、ゆっくりと安心してご入浴いただけます。プライバシーを重視した快適な空間をご用意しています。'
  },
  {
    icon: Activity,
    title: '専門的なリハビリ指導',
    description: '理学療法士など専門スタッフによる個別対応リハビリで、一人ひとりの状態に合わせた機能訓練を実施いたします。'
  },
  {
    icon: Utensils,
    title: '食事の管理',
    description: '当事業所では、ご利用者様の健康状態やアレルギー、ご要望に応じたメニューの提供も行い、安心してお召し上がりいただけるよう配慮しております。'
  },
  {
    icon: Users,
    title: '充実した趣味活動',
    description: '趣味活動を通じて、楽しみながら心身機能の維持・向上を図ります。仲間との交流を大切にしています。'
  },
  {
    icon: Clock,
    title: '柔軟な利用時間',
    description: 'ご利用者様のライフスタイルに合わせて、柔軟な時間の選択が可能です。半日型から1日型まで、ご要望に応じて対応いたします。'
  }
];