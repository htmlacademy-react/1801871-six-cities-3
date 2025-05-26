import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';
import { LoadingSpinner } from '../../components/loading-spinner/loading-spinner';
import { useAppSelector } from '../../store/hooks';


function MainPage(): JSX.Element {
  const isLoading = useAppSelector((state)=>state.isLoading);

  return (
    <div className="page page--gray page--main">

      { isLoading && <LoadingSpinner /> }

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

