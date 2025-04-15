import { Offer } from '../../types/offers';
import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';

type MainPageProps = {
    amountOfPlaces: number;
    offers:Offer[];
  }


function MainPage({amountOfPlaces, offers}:MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList/>
        </div>
        <CardList amountOfPlaces={amountOfPlaces} offers={offers}/>

      </main>
    </div>
  );
}

export default MainPage;

