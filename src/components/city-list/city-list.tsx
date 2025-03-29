import { City } from '../../types/offers';

type CityListProps = {
  city:City;
}

function CityList({city}: CityListProps):JSX.Element {

  const markActiveCity = function(name:string, activeCityName:string):string {
    if(activeCityName === name) {
      return 'tabs__item--active';
    }
    return '';
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <a className={`locations__item-link tabs__item ${markActiveCity('Paris', city.name)}`} href="#" >
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`locations__item-link tabs__item ${markActiveCity('Cologne', city.name)}`} href="#">
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`locations__item-link tabs__item ${markActiveCity('Brussels', city.name)}`} href="#">
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`locations__item-link tabs__item ${markActiveCity('Amsterdam', city.name)}`} href="#">
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`locations__item-link tabs__item ${markActiveCity('Hamburg', city.name)}`} href="#">
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`locations__item-link tabs__item ${markActiveCity('Dusseldorf', city.name)}`} href="#">
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default CityList;
