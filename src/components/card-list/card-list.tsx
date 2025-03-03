
import { useState } from 'react';


import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';


type CardListProps = {
  amountOfPlaces: number;
  offers:Offer[];
}


function CardList({offers, amountOfPlaces}:CardListProps):JSX.Element {


  const [activePoint, setActivePoint] = useState('');

  function getCardId (offer: Offer){
    setActivePoint(offer.id);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{amountOfPlaces} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
      Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
        Popular
              </li>
              <li className="places__option" tabIndex={0}>
        Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
        Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
        Top rated first
              </li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} getCardId={getCardId} type='cities'/>)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map" />
          <span>{activePoint}</span>
        </div>
      </div>
    </div>
  );

}

export default CardList;
