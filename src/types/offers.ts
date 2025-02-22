export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

type city = {
  'name': string;
  'location': {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  };
}

type location = {
  'latitude': number;
  'longitude': number;
  'zoom': number;
};


export type Offer = {
      'id': string;
      'title': string;
      'type': OfferType;
      'price': number;
      'previewImage': string;
      'city': city;
      'location':location;
      'isFavorite': boolean;
      'isPremium': boolean;
      'rating': number;
}
