import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CITES } from '../../cities';
import { setActiveCity } from '../../store/actions';
import { City } from '../../types/offers';


function CityList():JSX.Element {
  const activeCity = useAppSelector((state)=>state.city);
  const dispatch = useAppDispatch();

  const handleCityClick = (city:City) => {
    dispatch(setActiveCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITES.map((city)=>
          (
            <li className="locations__item"
              key={city.name}
            >
              <a
                className={`locations__item-link tabs__item ${activeCity.name === city.name ? 'tabs__item--active' : ''}`}
                onClick={()=>handleCityClick(city)}
              >
                <span>{city.name}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
export default CityList;

