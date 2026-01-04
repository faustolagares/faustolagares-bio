import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  username?: string;
  href: string;
  color?: string;
}

export interface Highlight {
  id: string;
  image: string;
  label: string;
}

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  badge?: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  avatar: string;
}
