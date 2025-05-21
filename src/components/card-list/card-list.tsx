
import { useState } from 'react';


import { Offer } from '../../types/offers';

import PlaceCard from '../place-card/place-card';
import ListSort from '../list-sort/list-sort';

import { sortDict } from '../../utils/sort';


import Map from '../map/map';
import { useAppSelector } from '../../store/hooks';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';


function CardList():JSX.Element {


  const [activePoint, setActivePoint] = useState<Offer | null>(null);
  const activeCity = useAppSelector((state)=> state.city);
  const offers = useAppSelector((state)=> state.offers);
  const currentSort = useAppSelector((state)=> state.currentSort);

  if(!offers) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const currentOffers = offers.filter((offer)=> offer.city.name === activeCity.name);

  currentOffers.sort(sortDict[currentSort].handler);

  function handelCurrentActiveCard (offer: Offer | null){
    if(offer) {
      setActivePoint(offer);
    } else{
      setActivePoint(null);
    }
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {activeCity.name}</b>

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
