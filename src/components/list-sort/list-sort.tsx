import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSort } from '../../store/actions';
import { Sort } from '../../types/sort';

function ListSort(): JSX.Element {
  const [isOpen, setOpenClose] = useState(false);
  const currentSort = useAppSelector((state)=> state.currentSort);
  const dispatch = useAppDispatch();

  const handleSortPopupClick = () => {
    setOpenClose(!isOpen);
  };

  const handelSortTypeClick = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    const sortName = target.dataset.cityName;

    if (sortName && sortName !== currentSort) {
      dispatch(changeSort(sortName as Sort));
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>

      <span className="places__sorting-type" tabIndex={0} onClick={handleSortPopupClick}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`} onClick={handelSortTypeClick}>
        <li className="places__option" data-city-name='Popular' tabIndex={0} >
Popular
        </li>
        <li className="places__option" data-city-name='Price: low to high' tabIndex={0}>
Price: low to high
        </li>
        <li className="places__option" data-city-name='Price: high to low' tabIndex={0}>
Price: high to low
        </li>
        <li className="places__option" data-city-name='Top rated first' tabIndex={0}>
Top rated first
        </li>
      </ul>
    </form>
  );
}

export default ListSort;
