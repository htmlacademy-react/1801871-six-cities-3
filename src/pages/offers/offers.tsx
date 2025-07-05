import {useParams} from 'react-router-dom';
import { useEffect } from 'react';


import NotFoundScreen from '../not-found/not-found';

import NearPlacesList from '../../components/near-places-list/near-places-list';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import ReviewList from '../../components/review-list/review-list';

import Map from '../../components/map/map';

import { fetchComments, fetchFullOffer, fetchNearbyOffers } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import AddToFavoriteButtonComponent from '../../components/add-to-favorite-button/add-to-favorite-button';
import { getSelector } from '../../store/selectors';


function OffersScreen(): JSX.Element | undefined {
  const id = useParams().id;
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getSelector('fullOffer','pending'));
  const offer = useAppSelector(getSelector('fullOffer','offer'));

  const comments = useAppSelector(getSelector('fullOffer','comments'));
  const nearbyOffers = useAppSelector(getSelector('fullOffer', 'nearbyOffers'));


  useEffect(() => {
    if (id) {
      dispatch(fetchFullOffer(id));
      dispatch(fetchNearbyOffers(id));
      dispatch(fetchComments(id));

    }
  }, [id, dispatch]);


  function getStarsInWidthPercent(stars:number): string {
    return `${stars * 20}%`;
  }

  function isPremium(cardType:boolean): JSX.Element | undefined {
    if(cardType) {
      return (
        <div className="offer__mark">
          <span>Premium</span>
        </div>);
    }
  }

  function isProHost(isPro:boolean): JSX.Element | undefined {
    if(isPro) {
      return (
        <span className="offer__user-status">Pro</span>
      );
    }
  }

  if(isLoading) {
    return <LoadingSpinner/>;
  }

  if(!offer) {
    return <NotFoundScreen notFoundPageType={'offer'}/>;
  }


  if(offer) {
    return (
      <div className="page">
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((src, index)=>(
                  <div className="offer__image-wrapper" key={`${index + src}`}>
                    <img
                      className="offer__image"
                      src={src}
                      alt={`Photo ${offer.title}`}
                    />
                  </div>
                ))}

              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {isPremium(offer.isPremium)}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {offer.title}
                  </h1>
                  <AddToFavoriteButtonComponent AddToFavoriteButtonType='fullOffer' id={offer.id} isFavorite={offer.isFavorite}></AddToFavoriteButtonComponent>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: getStarsInWidthPercent(offer.rating)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{offer.type}</li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {`${offer.bedrooms} bedrooms`}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    {`Max ${offer.maxAdults} adults`}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">Whats inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((good, index)=>(
                      <li className="offer__inside-item" key={`${good + index}`}>{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{offer.host.name}</span>
                    {isProHost(offer.host.isPro)}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                {comments && id && <ReviewList id={id} comments={comments}/>}
              </div>
            </div>
            <div>
              { nearbyOffers && <Map city={offer.city} activePoint={offer} points={nearbyOffers} className='offer'/> }
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
          Other places in the neighbourhood
              </h2>
              { nearbyOffers && <NearPlacesList offers={nearbyOffers}/> }
            </section>
          </div>
        </main>
      </div>
    );
  }
}
export default OffersScreen;

