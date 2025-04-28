
import { useState } from 'react';


import { Offer } from '../../types/offers';

import PlaceCard from '../place-card/place-card';
import ListSort from '../list-sort/list-sort';

import { sortDict } from '../../utils/sort';


import Map from '../map/map';
import { useAppSelector } from '../../store/hooks';


function CardList():JSX.Element {


  const [activePoint, setActivePoint] = useState<Offer | null>(null);
  const activeCity = useAppSelector((state)=> state.city);
  const offers = useAppSelector((state)=> state.offers);
  const currentSort = useAppSelector((state)=> state.currentSort);


  const currentOffers = offers.filter((offer)=> offer.city.name === activeCity.name);

  currentOffers.sort(sortDict[currentSort].handler);

  function handelCurrentActiveCard (offer: Offer | null){
    if(offer) {
      setActivePoint(offer);
    } else{
      setActivePoint(null);
    }
  }

  function getPlaceFoundText(placeAmount:number) {
    return placeAmount > 1 ? 'places' : 'place';
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} {getPlaceFoundText(currentOffers.length)} to stay in {activeCity.name}</b>

          <ListSort/>

          <div className="cities__places-list places__list tabs__content">

            {currentOffers.map((offer) =>
              (
                <PlaceCard
                  offer={offer}
                  key={offer.id}
                  handelCurrentActiveCard={handelCurrentActiveCard}
                  type='cities'
                />
              ))}

          </div>
        </section>

        <div className="cities__right-section">

          <Map activePoint={activePoint} city={activeCity} points={currentOffers} className='cities'/>

        </div>
      </div>
    </div>
  );

}

export default CardList;
