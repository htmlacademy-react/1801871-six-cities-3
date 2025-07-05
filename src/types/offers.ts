export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};


export interface Offer {
      id: TOfferId;
      title: string;
      type: OfferType;
      price: number;
      previewImage: string;
      city: City;
      location:Location;
      isFavorite: boolean;
      isPremium: boolean;
      rating: number;
}


export type Brand<UNIQ extends string, T = string> = T & { __Brand: UNIQ };

export type TOfferId = Brand<'OFFERID'> ;
