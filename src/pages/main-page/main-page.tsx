import { Offer } from '../../types/offers';
import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../store/hooks';

type MainPageProps = {
    amountOfPlaces: number;
    offers:Offer[];
  }


function MainScreen({amountOfPlaces, offers}:MainPageProps): JSX.Element {

  const city = useAppSelector((state)=> state.city);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList city={city} />
        </div>
        <CardList amountOfPlaces={amountOfPlaces} offers={offers}/>

      </main>
    </div>
  );
}

export default MainScreen;

