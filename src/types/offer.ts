import { City, Location } from './offers';

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;

  city: City;

  location: Location;

  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];

  host: Host;

  images: [string];
  maxAdults: number;
  }
