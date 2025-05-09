import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { City } from '../../types/offers';
import { LAYER_ATTRIBUTE, LAYER_PNG } from '../../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);


  useEffect(()=>{
    if(mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        LAYER_PNG,
        {
          attribution:
            LAYER_ATTRIBUTE
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;

    }
  }, [mapRef, city]);
  return map;
}
export default useMap;
