
import { Offer } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type NearPlacesListProps = {
  offers: Offer[];
}

function NearPlacesList ({offers}:NearPlacesListProps) :JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) =>
        (<PlaceCard offer={offer} key={offer.id} type='near-places'/>
        ))}
    </div>
  );
}

export default NearPlacesList;
