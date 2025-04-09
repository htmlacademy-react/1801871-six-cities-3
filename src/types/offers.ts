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
      id: string;
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
