import { Offers } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

function NearPlacesList () :JSX.Element {
  return (
    <div className="near-places__list places__list">
      {Offers.map((offer) =>
        (<PlaceCard offer={offer} key={offer.id} type='near-places'/>
        ))}
    </div>
  );
}

export default NearPlacesList;
