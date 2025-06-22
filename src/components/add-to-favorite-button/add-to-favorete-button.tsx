type FavoriteButtonTypes = 'card' | 'fullOffer';

type AddToFavoriteButtonProps = {
  AddToFavoriteButtonType: FavoriteButtonTypes;
}

function AddToFavoriteButtonComponent({AddToFavoriteButtonType}:AddToFavoriteButtonProps):JSX.Element{
  return(
    <button
      className="place-card__bookmark-button place-card__bookmark-button--active button"
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>

  );
}

export default AddToFavoriteButtonComponent;
                // <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                //   <svg class="place-card__bookmark-icon" width="18" height="19">
                //         <use xlink:href="#icon-bookmark"></use>
                //     </svg>
                //   <span class="visually-hidden">In bookmarks</span>
                // </button>

                // <button class="offer__bookmark-button button" type="button">
                //   <svg class="offer__bookmark-icon" width="31" height="33">
                //     <use xlink:href="#icon-bookmark"></use>
                //   </svg>
                //   <span class="visually-hidden">To bookmarks</span>
                // </button>

                // <button class="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                //   <svg class="place-card__bookmark-icon" width="18" height="19">
                //     <use xlink:href="#icon-bookmark"></use>
                //   </svg>
                //   <span class="visually-hidden">In bookmarks</span>
                // </button>
