import { useMemo } from 'react';
import { TComment } from '../../types/comment';
import { getStarsInWidthPercent } from '../../utils/utils';

const Month = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];


type CommentProps = {
  comment:TComment;
}

function getHumanDate(date:string):string {
  const objDate = new Date(date);
  const month = objDate.getMonth();
  const year = objDate.getFullYear();
  return `${Month[month]} ${year}`;
}

function Comment({comment}:CommentProps):JSX.Element {

  const ratingPercent = useMemo(() => getStarsInWidthPercent(comment.rating), [comment.rating]);
  const humanDate = useMemo(() => getHumanDate(comment.date), [comment.date]);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingPercent }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>
          {humanDate}
        </time>
      </div>
    </li>
  );
}

export default Comment;
