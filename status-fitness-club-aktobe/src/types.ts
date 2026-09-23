export type Language = 'RU' | 'KZ' | 'EN';

export interface Trainer {
  id: string;
  name: {
    RU: string;
    KZ: string;
    EN: string;
  };
  role: {
    RU: string;
    KZ: string;
    EN: string;
  };
  experience: {
    RU: string;
    KZ: string;
    EN: string;
  };
  achievements?: {
    RU: string;
    KZ: string;
    EN: string;
  };
  specialization: {
    RU: string[];
    KZ: string[];
    EN: string[];
  };
  category: 'strength' | 'weight-loss' | 'rehab' | 'crossfit';
  image: string;
  imagePosition?: string;
  imageTransform?: string;
  instagram?: string;
  bio: {
    RU: string;
    KZ: string;
    EN: string;
  };
}

export interface ZoneItem {
  id: string;
  title: {
    RU: string;
    KZ: string;
    EN: string;
  };
  subtitle: {
    RU: string;
    KZ: string;
    EN: string;
  };
  level: {
    RU: string;
    KZ: string;
    EN: string;
  };
  description: {
    RU: string;
    KZ: string;
    EN: string;
  };
  features: {
    RU: string[];
    KZ: string[];
    EN: string[];
  };
  image: string;
  tag: string;
}

export interface PricingPlan {
  id: string;
  name: {
    RU: string;
    KZ: string;
    EN: string;
  };
  price: string;
  period: {
    RU: string;
    KZ: string;
    EN: string;
  };
  popular?: boolean;
  badge?: {
    RU: string;
    KZ: string;
    EN: string;
  };
  features: {
    RU: string[];
    KZ: string[];
    EN: string[];
  };
  access: {
    RU: string;
    KZ: string;
    EN: string;
  };
}

export interface InstagramPost {
  id: string;
  type: 'image' | 'video';
  image: string;
  likes: number;
  comments: number;
  caption: {
    RU: string;
    KZ: string;
    EN: string;
  };
  date: string;
  url: string;
}
