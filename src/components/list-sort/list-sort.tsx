import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSort } from '../../store/actions';
import { sortDict, SortTypeKey} from '../../types/sort';

function ListSort(): JSX.Element {
  const [isOpen, setOpenClose] = useState(false);
  const currentSort = useAppSelector((state)=> state.currentSort);
  const dispatch = useAppDispatch();

  const handleSortPopupClick = () => {
    setOpenClose(!isOpen);
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>

      <span className="places__sorting-type" tabIndex={0} onClick={handleSortPopupClick}>
        {sortDict[currentSort].label}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {SortTypeKey.map((key)=>
          (
            <li className="places__option" tabIndex={0} key={key}

              onClick={()=>{
                dispatch(changeSort(key));
              }}
            >
              {sortDict[key].label}
            </li>
          )
        )}

      </ul>
    </form>
  );
}

export default ListSort;
