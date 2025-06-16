import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import { useAppSelector } from '../../store/hooks';


function MainPage(): JSX.Element {

  const isOffersLoading = useAppSelector((state)=> state.offers.pending);
  const isAuthLoading = useAppSelector((state)=> state.auth.pending);
  const isFavoritesLoading = useAppSelector((state) => state.favorites.pending);
  //Перепиши на селектор

  return (
    <div className="page page--gray page--main">

      { isFavoritesLoading && isOffersLoading && isAuthLoading && <LoadingSpinner /> }

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <CityList />
        </div>

        <CardList/>

      </main>
    </div>
  );
}

export default MainPage;

