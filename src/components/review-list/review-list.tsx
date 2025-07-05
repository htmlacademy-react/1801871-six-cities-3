import { TComment } from '../../types/comment';

import Comment from '../comment/comment';

import { useAppSelector } from '../../store/hooks';

import { AuthState } from '../../const';
import SendComment from '../send-comment/send-comment';
import { getSelector } from '../../store/selectors';

type ReviewListProps = {
  comments: TComment[];
  id:string;
}


function ReviewList ({comments , id}:ReviewListProps):JSX.Element {

  const authStatus = useAppSelector(getSelector('auth','authStatus'));

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
  Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.slice(0,10).map((element) =>
          (<Comment comment={element} key={element.id} />))}
      </ul>

      {authStatus === AuthState.Auth && <SendComment id={id}/>}

    </section>
  );
}

export default ReviewList;


