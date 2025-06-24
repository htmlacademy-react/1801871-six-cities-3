import { fetchAddRemoveFromFavorites } from '../../store/api-action';
import { useAppDispatch } from '../../store/hooks';

type FavoriteButtonTypes = 'card' | 'fullOffer';

type FavoriteButtonStateOption = {
  width:number;
  height:number;
  class:string;
}

type AddToFavoriteButtonProps = {
  AddToFavoriteButtonType: FavoriteButtonTypes;
  isFavorite: boolean;
  id:string;
}

const AddToFavoriteButtonState: Record<FavoriteButtonTypes,FavoriteButtonStateOption> = {
  'card':{
    width:18,
    height:19,
    class:'place-card'
  },
  'fullOffer':{
    width:31,
    height:33,
    class:'offer'
  }
};

function AddToFavoriteButtonComponent({AddToFavoriteButtonType, isFavorite, id}:AddToFavoriteButtonProps):JSX.Element{
  const dispatch = useAppDispatch();

  const handelAddToFavorite = () => {
    dispatch(fetchAddRemoveFromFavorites({id, isFavorite}));
  };

  function ShowHideFavoriteClass() {
    return isFavorite ? `${AddToFavoriteButtonState[AddToFavoriteButtonType].class}__bookmark-button--active` : '';
  }

  return(
    <button
      className={`${AddToFavoriteButtonState[AddToFavoriteButtonType].class}__bookmark-button button ${ShowHideFavoriteClass()}`}
      type="button"
      onClick={handelAddToFavorite}
    >
      <svg className={`${AddToFavoriteButtonState[AddToFavoriteButtonType].class}__bookmark-icon`} width={AddToFavoriteButtonState[AddToFavoriteButtonType].width} height={AddToFavoriteButtonState[AddToFavoriteButtonType].height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>

  );
}

export default AddToFavoriteButtonComponent;
