import { TSortDictItem, TSortKey } from '../types/sort';

type TSortDict = Record<TSortKey, TSortDictItem>;

export const sortDict: TSortDict = {
  'Popular': {
    label: 'Popular',
    handler: () => 0
  },
  'Price: low to high': {
    label: 'Price: low to high',
    handler: (a, b) =>{
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
  },

  'Price: high to low': {
    label: 'Price: high to low',
    handler: (a, b) =>{
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    }
  },

  'Top rated first': {
    label: 'Top rated first',
    handler: (a, b) =>{
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    }
  }
};

export const SortTypeKey: TSortKey[] = Object.keys(sortDict) as TSortKey[];
