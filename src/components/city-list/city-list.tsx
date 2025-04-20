import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CITES } from '../../cities';
import { updateCityAction } from '../../store/actions';


function CityList():JSX.Element {
  const activeCity = useAppSelector((state)=>state.city);
  const dispatch = useAppDispatch();
  const handleCityClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    const target = evt.target as HTMLElement;
    const cityElement = target.closest('[data-city-name]') as HTMLElement ;

    if (cityElement) {
      const cityName = cityElement.dataset.cityName;
      const currentCity = CITES.find((city) => city.name === cityName);
      if (currentCity && cityName !== activeCity.name) {
        dispatch(updateCityAction(currentCity));
      }
    }
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
                href="#"
                data-city-name={city.name}
                onClick={handleCityClick}
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

