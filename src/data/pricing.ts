export interface PricingItem {
  name: string;
  price: string;
}

export interface PricingPlan {
  title: string;
  items: PricingItem[];
}

export const pricingPlans: PricingPlan[] = [
  {
    title: '1日型サービス',
    items: [
      { name: '要介護2', price: '777単位' },
      { name: '要介護3', price: '900単位' },
      { name: '要介護4', price: '1,023単位' }
    ]
  },
  {
    title: '半日型サービス',
    items: [
      { name: '要介護2', price: '423単位' },
      { name: '要介護3', price: '479単位' },
      { name: '要介護4', price: '533単位' }
    ]
  },
  {
    title: 'その他費用',
    items: [
      { name: '食事代', price: '700円' },
      { name: 'バスタオル貸出', price: '100円/回' },
      { name: '教養娯楽費', price: '実費' },
      { name: '消耗品代', price: '実費' }
    ]
  }
];