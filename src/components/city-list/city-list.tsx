import { setActiveCity } from '../../store/actions';
import { useAppDispatch } from '../../store/hooks';
import { City } from '../../types/offers';

import { CITIES } from '../../сities';

type CityListProps = {
  activeCity:City;
}

function CityList({activeCity}: CityListProps):JSX.Element {
  const dispatch = useAppDispatch();

  const markActiveCity = function(name:string, activeCityName:string):string {
    if(activeCityName === name) {
      return 'tabs__item--active';
    }
    return '';
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city)=>(
          <li className="locations__item" key={city.name}>
            <a
              className={`locations__item-link tabs__item ${markActiveCity(activeCity.name, city.name)}`}
              onClick={()=>{
                dispatch(setActiveCity(city));
              }}
            >
              <span>{city.name}</span>
            </a>
          </li>)
        )}
      </ul>
    </section>
  );
}
export default CityList;
