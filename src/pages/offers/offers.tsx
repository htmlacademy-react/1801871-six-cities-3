import {useParams} from 'react-router-dom';



import { CITIES } from '../../сities';


import NotFoundScreen from '../not-found/not-found';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


import { setLoadingStatus } from '../../store/actions';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import { FullOffer } from '../../types/offer';
import { TComment } from '../../types/comment';
import { Offer } from '../../types/offers';


function OffersScreen(): JSX.Element | undefined {
  const id = useParams().id;
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state)=>state.isLoading);

  const [offer, setOffer] = useState<FullOffer | null>(null);
  const [comments, setComments] = useState<TComment[] | null>(null);
  const [isNotFound, setNotFound] = useState<boolean>(false);
  const [nearbyOffers, setNearbyOffers] = useState<Offer[] | null>(null);

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        dispatch(setLoadingStatus(true));
        const { data } = await axios.get<FullOffer>(
          `https://15.design.htmlacademy.pro/six-cities/offers/${id}`
        );
        setOffer(data);
      } catch (err) {
        console.log(err);
        setNotFound(true);
      } finally {
        dispatch(setLoadingStatus(false));
      }
    };

    if (id) {
      fetchOffer();
    }
  }, [id, dispatch]);


  useEffect(() => {
    const fetchComments = async () => {
      try {
        dispatch(setLoadingStatus(true));
        const { data } = await axios.get<TComment[]>(
          `https://15.design.htmlacademy.pro/six-cities/comments/${id}`
        );
        setComments(data);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(setLoadingStatus(false));
      }
    };

    if (id) {
      fetchComments();
    }
  }, [id, dispatch]);


  useEffect(() => {
    const fetchNearbyOffers = async () => {
      try {
        dispatch(setLoadingStatus(true));
        const { data } = await axios.get<Offer[]>(
          `https://15.design.htmlacademy.pro/six-cities/offers/${id}/nearby`
        );
        setNearbyOffers(data);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(setLoadingStatus(false));
      }
    };

    if (id) {
      fetchNearbyOffers();
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

  if(isNotFound) {
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
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
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
                {comments && id ? <ReviewList id={id} comments={comments}/> : ''}
              </div>
            </div>
            <div>
              { nearbyOffers !== null ? <Map city={offer.city} activePoint={offer} points={nearbyOffers} className='offer'/> : ''}
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
          Other places in the neighbourhood
              </h2>
              { nearbyOffers !== null ? <NearPlacesList offers={nearbyOffers}/> : ''}
            </section>
          </div>
        </main>
      </div>
    );
  }
}
export default OffersScreen;

