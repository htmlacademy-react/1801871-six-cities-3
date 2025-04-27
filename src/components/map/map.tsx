import { useEffect, useRef } from 'react';
import {Icon, LayerGroup, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';


import { City, Offer} from '../../types/offers';

import useMap from './use-map';
type ClassName = 'offer' | 'cities';


type MapProps = {
  className:Extract<ClassName, 'cities'>;
  city:City;
  points:Offer[];
  activePoint:Offer| null;
} | {
  className:Exclude<ClassName, 'cities'>;
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


function Map({city, points, activePoint, className} : MapProps):JSX.Element{

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayer = useRef<LayerGroup>(layerGroup());


  useEffect(()=>{
    if(map){
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude,
      }, city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  },[city, map]);

  useEffect(() => {
    if (map) {
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

        marker.addTo(markerLayer.current);


      });

    }
  }, [map, points, activePoint]);

  return (
    <section className={`${className}__map`} ref={mapRef} />
  );
}
export default Map;
