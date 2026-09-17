export interface CourseModule {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  highlights: string[];
}

export interface KitItem {
  id: number;
  title: string;
  format: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MethodPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  practice: string;
}
