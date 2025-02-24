import {Link} from 'react-router-dom';

import { Offer } from '../../types/offers';
import { CardType } from '../../const';


type PlaceCardProps = {
  offer: Offer;
  cardType:CardType;
  getCardId?:(offer: Offer) => void;
};

function isPremium(cardType:boolean): JSX.Element | undefined {
  if(cardType) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>);
  }
}

function getStarsInWidthPercent(stars:number): string {
  return `${stars * 20}%`;
}

function PlaceCard({offer, getCardId, cardType} : PlaceCardProps): JSX.Element {

  return (
    <article className={`${cardType}__card place-card`}
      onMouseOver={() => {
        if(getCardId){
          getCardId(offer);
        }
      }}
    >
      {isPremium(offer.isPremium)}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardType}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width:getStarsInWidthPercent(offer.rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

