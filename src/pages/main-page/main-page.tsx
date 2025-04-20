import CardList from '../../components/card-list/card-list';
import CityList from '../../components/city-list/city-list';


function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList/>
        </div>
        <CardList/>

      </main>
    </div>
  );
}

export default MainPage;

