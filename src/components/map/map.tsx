import { useEffect, useRef } from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';


import { City, Offer} from '../../types/offers';

import useMap from './use-map';


type MapProps = {
  city:City;
  points:Offer[];
  activePoint:Offer| null;
} | {
  city:City;
  points:Offer[];
  activePoint?:undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function Map({city, points, activePoint} : MapProps):JSX.Element{

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activePoint !== null && activePoint !== undefined && point.id === activePoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          );

        marker.addTo(markerLayer);


      });

      markerLayer.addTo(map);
    }
  }, [map, points, activePoint]);

  return (
    <section className="cities__map map" style={{background:'none'}}>
      <div ref={mapRef} style={{height: '600px'}}></div>
    </section>);
}
export default Map;
