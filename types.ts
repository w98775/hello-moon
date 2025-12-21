
export enum TabType {
  PREPARATION = 'PREPARATION',
  ITINERARY = 'ITINERARY',
  TRANSPORT = 'TRANSPORT',
  ACCOMMODATION = 'ACCOMMODATION',
  RECOMMENDATION = 'RECOMMENDATION',
  CURRENCY = 'CURRENCY'
}

export interface Activity {
  id: string;
  nameEn: string;
  nameZh: string;
  priceUsd: number;
  description: string;
  category: string;
}

export interface TravelDay {
  date: string;
  title: string;
  location: string;
  summary: string;
  activities: {
    time: string;
    title: string;
    locationName: string;
    note?: string;
    isRecommendation?: boolean;
    rating?: number;
  }[];
  isMaldivesResort?: boolean;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: 'Document' | 'Gear' | 'Money' | 'Health';
}
