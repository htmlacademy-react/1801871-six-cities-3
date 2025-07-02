import { useNavigate } from 'react-router-dom';
import { fetchAddRemoveFromFavorites } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TOfferId } from '../../types/offers';
import { AuthState } from '../../const';
import { setCookie } from '../../coockies/coockies';

type FavoriteButtonTypes = 'card' | 'fullOffer';

type FavoriteButtonStateOption = {
  width:number;
  height:number;
  class:string;
}

type AddToFavoriteButtonProps = {
  AddToFavoriteButtonType: FavoriteButtonTypes;
  isFavorite: boolean;
  id: TOfferId;
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state)=> state.auth.authStatus);

  const handelAddToFavorite = () => {
    if (isAuthorized === AuthState.NoAuth) {
      navigate('/login');
      setCookie('lastRoute', `/offer/${id}`, 1);
      return;
    }
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
