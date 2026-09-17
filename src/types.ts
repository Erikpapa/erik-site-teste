export interface CourseModule {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  highlights: string[];
}

export interface BonusItem {
  id: number;
  tag: string;
  title: string;
  format: string;
  originalPrice: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialNotification {
  id: string;
  name: string;
  city: string;
  timeAgo: string;
  action: string;
}

export interface OrderBump {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  selected: boolean;
}
