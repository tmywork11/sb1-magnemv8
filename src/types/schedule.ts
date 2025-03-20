import { DivideIcon as LucideIcon } from 'lucide-react';

export interface ScheduleItemType {
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type ScheduleType = 'full' | 'morning' | 'afternoon';