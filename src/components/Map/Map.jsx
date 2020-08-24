import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

//styling
import MapStyles from './Map.styles';

const libraries = ['places'];

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 5.603717,
  lng: -0.186964,
};

export default () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      options={options}
    ></GoogleMap>
  );
};
