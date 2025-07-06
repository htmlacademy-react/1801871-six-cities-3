import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { sortDict, SortTypeKey} from '../../utils/sort';
import React from 'react';
import { changeSort } from '../../store/offers-slice';
import { getSelector } from '../../store/selectors';

function ListSortComponent(): JSX.Element {
  const [isOpen, setOpenClose] = useState(false);
  const currentSort = useAppSelector(getSelector('offers','currentSort'));
  const dispatch = useAppDispatch();

  const handleSortPopupClick = () => {
    setOpenClose(!isOpen);
  };


  useEffect(()=>{

    function handleEscKeydown(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        setOpenClose(!isOpen);
      }
    }

    if(isOpen) {
      document.addEventListener('keydown', handleEscKeydown);
    }

    return ()=>{
      document.removeEventListener('keydown', handleEscKeydown);
    };
  },[isOpen]);


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
                handleSortPopupClick();
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

const ListSort = React.memo(ListSortComponent);


export default ListSort;
