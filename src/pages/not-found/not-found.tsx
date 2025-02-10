import { NotFoundPageType } from '../../const';

type NotFoundProps = {
  notFoundPageType:NotFoundPageType;
}

const notFoundScreenState : Record<NotFoundPageType, string> = {
  offer: 'Product not found',
  route: '404, unfortunately the page was not found! <br></br>Return to the main page by clicking on the logo.'
};


function NotFoundScreen ({notFoundPageType}:NotFoundProps):JSX.Element {
  return (
    <main className='page__main'>
      <section className='not-found container'>
        <p className='not-found__warning'>{notFoundScreenState[notFoundPageType]}</p>
      </section>
    </main>

  );
}

export default NotFoundScreen;

