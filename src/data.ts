import {
  CakeSlice,
  Coffee,
  Home,
  MapPin,
  PackageCheck,
  Sparkles,
  Star,
  Truck,
  Wheat,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Breakfast = {
  title: string;
  description: string;
  image: string;
};

export type Feature = {
  title: string;
  Icon: LucideIcon;
};

export const whatsappHref = 'https://wa.me/77073195034';

export const instagramHref = 'https://www.instagram.com/baker.street.alatau';

export const heroStats: Feature[] = [
  { title: '4.8 рейтинг', Icon: Star },
  { title: 'Кофе и завтраки', Icon: Coffee },
  { title: 'Доставка', Icon: Truck },
  { title: 'Ибрагимова 12а', Icon: MapPin },
];

export const comfortItems = ['Уютный зал', 'Завтраки каждый день', 'Доставка по району', 'Можно с ноутбуком'];

export const aboutFeatures: Feature[] = [
  { title: 'Уютная атмосфера', Icon: Home },
  { title: 'Свежая выпечка', Icon: Wheat },
  { title: 'Качественный кофе', Icon: Coffee },
  { title: 'Доставка по району', Icon: PackageCheck },
];

export const breakfasts: Breakfast[] = [
  {
    title: 'Английский завтрак',
    image: '/food/english.png',
    description: 'Сытное начало дня с яйцами, колбасками и свежими овощами.',
  },
  {
    title: 'Скрембл',
    image: '/food/scramble.png',
    description: 'Нежный скрембл с брускеттой и слабосолёным лососем.',
  },
  {
    title: 'Панини',
    image: '/food/panini.png',
    description: 'Хрустящий хлеб, свежие овощи и сочная начинка.',
  },
  {
    title: 'Сырники',
    image: '/food/sirniki.png',
    description: 'Домашние сырники со сметаной и ягодным соусом.',
  },
];

export const coffeeImages = ['/food/coffee1.jpg', '/food/coffee2.jpg', '/food/coffee3.jpg'];

export const setCards = [
  {
    title: 'Завтрак для двоих',
    image: '/food/set1.png',
    Icon: Sparkles,
  },
  {
    title: 'Сет для компании',
    image: '/food/set5.png',
    Icon: CakeSlice,
  },
];

export const galleryImages = ['/interior/1.jpg', '/interior/3.jpg', '/interior/4.jpg'];
