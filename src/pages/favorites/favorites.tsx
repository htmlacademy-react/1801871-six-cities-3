import { useEffect } from 'react';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import PlaceCard from '../../components/place-card/place-card';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import NotFoundScreen from '../not-found/not-found';
import { fetchFavorites } from '../../store/api-action';
import { Offer } from '../../types/offers';


type OffersByCity = Record<string, Offer[]>;

function groupOffersByCity(offers: Offer[]): OffersByCity {
  const result: OffersByCity = {};
  offers.forEach((offer)=>{
    if(!result[offer.city.name]){
      result[offer.city.name] = [];
    }
    result[offer.city.name].push(offer);
  });

  return result;
}

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const isLoading = useAppSelector((state)=> state.isLoading);
  useEffect(() => {
    dispatch(fetchFavorites());


  }, [dispatch]);


  if(isLoading) {
    return <LoadingSpinner/>;
  }

  if(!favorites) {
    return <NotFoundScreen notFoundPageType={'offer'}/>;
  }

  const offersByCity = groupOffersByCity(favorites);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {
                Object.entries(offersByCity).map(([city, offers])=>(

                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} type='favorites'/>)}
                    </div>
                  </li>))
              }

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
