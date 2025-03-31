import { setActiveCity } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { CITIES } from '../../сities';


function CityList():JSX.Element {
  const activeCity = useAppSelector((state)=> state.city);
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
