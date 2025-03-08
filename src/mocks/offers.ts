import { Offer, OfferType } from '../types/offers';

export const Offers: Offer[] = [
  {
    'id': 'cefbdb9e-af28-4166-90ed-273428016b25',
    'title': 'Wood and stone place',
    'type': OfferType.Hotel,
    'price': 202,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '4da58b5e-1a67-40f0-b998-2af668bbdfc8',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': OfferType.Room,
    'price': 243,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': '9a374ac2-2af3-4c70-9f8d-a7ccbaa4de1c',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': OfferType.Hotel,
    'price': 354,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '28c808ba-edd8-4934-b095-2cf8ca59905a',
    'title': 'Amazing and Extremely Central Flat',
    'type': OfferType.Room,
    'price': 196,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4
  }];
