import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CITIES } from '../../сities';

import { City } from '../../types/offers';
import React from 'react';
import { setActiveCity } from '../../store/offers-slice';
import { getSelector } from '../../store/selectors';


function CityListComponent():JSX.Element {
  const activeCity = useAppSelector(getSelector('offers', 'city'));
  const dispatch = useAppDispatch();

  const handleCityClick = (city:City) => {
    dispatch(setActiveCity(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city)=>
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


const CityList = React.memo(CityListComponent);

export default CityList;

