import { Offer } from './offers';

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type FullOffer = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};
