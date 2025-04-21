import {useParams} from 'react-router-dom';


import { Comments } from '../../mocks/comments';
import { CITES } from '../../cities';


import NotFoundScreen from '../not-found/not-found';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import { useAppSelector } from '../../store/hooks';


function OffersScreen(): JSX.Element | undefined {
  const id = useParams().id;
  const offers = useAppSelector((state) => state.offers);
  const currenOffer = offers.find((offer)=>offer.id === id);

  function getStarsInWidthPercent(stars:number): string {
    return `${stars * 20}%`;
  }

  if(!currenOffer) {
    return <NotFoundScreen notFoundPageType={'offer'}/>;
  }


  function isPremium(cardType:boolean): JSX.Element | undefined {
    if(cardType) {
      return (
        <div className="offer__mark">
          <span>Premium</span>
        </div>);
    }
  }
  if(currenOffer) {
    return (
      <div className="page">
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                <div className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src="img/room.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src="img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src="img/apartment-02.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src="img/apartment-03.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src="img/studio-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src="img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {isPremium(currenOffer.isPremium)}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {currenOffer.title}
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
                    <span style={{ width: getStarsInWidthPercent(currenOffer.rating)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{currenOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{currenOffer.type}</li>
                  <li className="offer__feature offer__feature--bedrooms">
              3 Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
              Max 4 adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">{currenOffer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">Whats inside</h2>
                  <ul className="offer__inside-list">
                    <li className="offer__inside-item">Wi-Fi</li>
                    <li className="offer__inside-item">Washing machine</li>
                    <li className="offer__inside-item">Towels</li>
                    <li className="offer__inside-item">Heating</li>
                    <li className="offer__inside-item">Coffee machine</li>
                    <li className="offer__inside-item">Baby seat</li>
                    <li className="offer__inside-item">Kitchen</li>
                    <li className="offer__inside-item">Dishwasher</li>
                    <li className="offer__inside-item">Cabel TV</li>
                    <li className="offer__inside-item">Fridge</li>
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src="img/avatar-angelina.jpg"
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">Angelina</span>
                    <span className="offer__user-status">Pro</span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                A quiet cozy and picturesque that hides behind a a river by the
                unique lightness of Amsterdam. The building is green and from
                18th century.
                    </p>
                    <p className="offer__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <ReviewList comments={Comments}/>
              </div>
            </div>
            <div>
              <Map city={CITES[0]} points={offers} className='offer'/>
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
          Other places in the neighbourhood
              </h2>
              <NearPlacesList />
            </section>
          </div>
        </main>
      </div>
    );
  }
}
export default OffersScreen;

