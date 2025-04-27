export type TSortKey = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';


type TSortDictItem = {
  label: TSortKey;
  handler: () => void;
};

type TSortDict = Record<TSortKey, TSortDictItem>;

export const sortDict: TSortDict = {
  'Popular': {
    label: 'Popular',
    handler: () => { console.log('Sort by popular'); }
  },
  'Price: low to high': {
    label: 'Price: low to high',
    handler: () => { console.log('Sort by price low to high'); }
  },
  'Price: high to low': {
    label: 'Price: high to low',
    handler: () => { console.log('Sort by price high to low'); }
  },
  'Top rated first': {
    label: 'Top rated first',
    handler: () => { console.log('Sort by top rated first'); }
  }
};

export const SortTypeKey: TSortKey[] = Object.keys(sortDict) as TSortKey[];
