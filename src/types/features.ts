import { DivideIcon as LucideIcon } from 'lucide-react';

export interface FeatureType {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureResponse extends BaseResponse {
  data: FeatureType[];
}