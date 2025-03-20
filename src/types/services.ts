import { DivideIcon as LucideIcon } from 'lucide-react';

export interface ServiceHighlightProps {
  title: string;
  icon: LucideIcon;
  delay: number;
}

export interface ServiceIconProps {
  type: 'bath' | 'activity' | 'clock';
  className?: string;
}

export type ServiceFeatureType = {
  icon: LucideIcon;
  title: string;
  description: string;
}