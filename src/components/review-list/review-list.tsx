import { useState, Fragment, ChangeEventHandler } from 'react';
import { TComment } from '../../types/comment';

import Comment from '../comment/comment';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { sendComment } from '../../store/api-action';
import ErrorText from '../error-text/error-text';

import { ENDPOINTS } from '../../types/endpoint';
import { AuthState } from '../../const';

type ReviewListProps = {
  comments: TComment[];
  id:string;
}


type CommentHandler = ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>


function ReviewList ({comments , id}:ReviewListProps):JSX.Element {

  const dispatch = useAppDispatch();
  const errorData = useAppSelector((state)=>state.errorData);
  const authStatus = useAppSelector((state)=> state.authStatus);

  const rating = [
    {title: 'perfect', value: 5},
    {title: 'good', value: 4},
    {title: 'not bad', value: 3},
    {title: 'badly', value: 2},
    {title: 'terribly', value: 1},
  ];

  const [comment, setComment] = useState({comment:'', rating:-1});


  const getCommentHandler = (type: keyof typeof comment): CommentHandler => (e) => {

    setComment({
      ...comment,
      [type]: type === 'comment'
        ? e.target.value
        : Number(e.target.value)
    });
  };

  const onSubmitComment = (event: React.FormEvent) => {
    event.preventDefault();


    if(comment.comment && comment.rating !== -1) {
      dispatch(sendComment(
        {
          id:id,
          comment:comment.comment,
          rating: comment.rating
        }
      ));
    }
  };

  function showHideError() {
    if(!errorData?.path.includes(ENDPOINTS.comments)) {
      return;
    }

    const err = errorData.data?.find((data)=> data.field === 'comment');

    return err ? <ErrorText errorText={err.messages.join(' ')} /> : undefined;
  }


  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
  Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((element) =>
          (<Comment comment={element} key={element.id} />))}
      </ul>
      { authStatus === AuthState.Auth ?
        <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitComment}>
          <label className="reviews__label form__label" htmlFor="review">
    Your review
          </label>
          <div className="reviews__rating-form form__rating">
            {rating.map((rate)=>(
              <Fragment key={rate.title}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={rate.value}
                  id={`${rate.value}-stars`}
                  type="radio"
                  checked={comment.rating === rate.value}
                  onChange={getCommentHandler('rating')}
                />
                <label
                  htmlFor={`${rate.value}-stars`}
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
            defaultValue={comment.comment}
            onChange={getCommentHandler('comment')}
          />
          {showHideError()}
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
              disabled={comment.comment.length <= 50}
            >
      Submit
            </button>
          </div>
        </form> : ''}

    </section>
  );
}

export default ReviewList;


