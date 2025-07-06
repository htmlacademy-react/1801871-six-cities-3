
import { useCallback, useState } from 'react';

import { Offer } from '../../types/offers';

import PlaceCard from '../place-card/place-card';
import ListSort from '../list-sort/list-sort';


import Map from '../map/map';
import { useAppSelector } from '../../store/hooks';

import ErrorWindow from '../error-window/error-window';
import { getSelector, selectFilteredSortedOffers } from '../../store/selectors';
import EmptyPage from '../empty-page/empty-page';


function CardList():JSX.Element {


  const [activePoint, setActivePoint] = useState<Offer | null>(null);
  const activeCity = useAppSelector(getSelector('offers','city'));


  const memoizedHandleActiveCard = useCallback((offer: Offer | null) => {
    setActivePoint(offer);
  }, []);

  const currentOffers = useAppSelector(selectFilteredSortedOffers);

  if(!currentOffers) {
    return <ErrorWindow></ErrorWindow>;
  }


  function getPlaceFoundText(placeAmount:number) {
    return placeAmount > 1 ? 'places' : 'place';
  }

  if(currentOffers.length === 0) {
    return <EmptyPage></EmptyPage>;
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
                  handelCurrentActiveCard={memoizedHandleActiveCard}
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
