import { useState,Fragment } from 'react';

function Reviews ():JSX.Element {
  const [rating, setRating] = useState([false, false , false , false , false]);
  const [comment, setComment] = useState('');
  const key = [1,2,3,4,5];

  function isMoreFortyNineSymbol(text:string):boolean {
    return text.length >= 50;
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
  Reviews · <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src="img/avatar-max.jpg"
                width={54}
                height={54}
                alt="Reviews avatar"
              />
            </div>
            <span className="reviews__user-name">Max</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: '80%' }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
        A quiet cozy and picturesque that hides behind a a river by
        the unique lightness of Amsterdam. The building is green and
        from 18th century.
            </p>
            <time className="reviews__time" dateTime="2019-04-24">
        April 2019
            </time>
          </div>
        </li>
      </ul>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">
    Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {rating.map((element, id)=>(
            <Fragment key={key[id]}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={rating.length - id}
                id={`${rating.length - id}-stars`}
                type="radio"
                checked={element}
                onChange={() => {

                  const values = [false, false , false , false , false];
                  values[id] = true;
                  setRating(values);
                }}
              />
              <label
                htmlFor={`${rating.length - id}-stars`}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>))}


        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          defaultValue={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
      To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span> and describe
      your stay with at least{' '}
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={isMoreFortyNineSymbol(comment)}
          >
      Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Reviews;


