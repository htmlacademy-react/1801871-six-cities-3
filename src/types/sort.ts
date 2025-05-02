import { Offer } from './offers';

export type TSortKey = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';


export type TSortDictItem = {
  label: TSortKey;
  handler: (a:Offer, b:Offer) => number;
};


