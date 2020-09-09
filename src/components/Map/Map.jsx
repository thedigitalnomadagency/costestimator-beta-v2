import React, { useState, useCallback } from 'react';
import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

//components
import Search from '../Search/Search';

//styling
import { MapWrapper } from './Map.styles';

const libraries = ['places'];

const mapContainerStyles = {
  height: '100%',
  width: '100%',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 5.603717,
  lng: -0.186964,
};

export default () => {
  const priceConfig = useSelector((state) => state.config.config);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState(null);

  const directionsCallback = useCallback((response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      }
    }
  }, []);

  const calculatePrice = (distance) => {
    const price = priceConfig.find(
      (config) =>
        distance <= config.maxDistance && distance >= config.minDistance
    );

    if (price) {
      return `GH¢ ${price.price}`;
    } else {
      return 'Sorry no price for this distance. Add to your settings';
    }
  };

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading Map...';

  return (
    <MapWrapper>
      <div className="form">
        <Search setAddress={setPickup} placeholder="Pickup Location" />
        <Search
          setAddress={setDestination}
          placeholder="Destination Location"
        />
      </div>

      {directions && (
        <motion.div
          initial={{ x: '-150px' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
          className="results"
        >
          <h1 className="text">
            Distance: {directions.routes[0].legs[0].distance.text}
          </h1>
          <h1 className="text">
            Duration: {directions.routes[0].legs[0].duration.text}
          </h1>
          <h1 className="text">
            Delivery Cost:{' '}
            {calculatePrice(
              Math.round(
                directions.routes[0].legs[0].distance.value / 1000
              ).toFixed(2)
            )}
          </h1>
        </motion.div>
      )}

      <GoogleMap
        mapContainerStyle={mapContainerStyles}
        zoom={14}
        center={center}
        options={options}
      >
        {destination !== '' && pickup !== '' && (
          <DirectionsService
            options={{
              destination: destination,
              origin: pickup,
              travelMode: 'DRIVING',
            }}
            callback={directionsCallback}
          />
        )}

        {directions !== null && (
          <DirectionsRenderer
            options={{
              directions: directions,
            }}
          />
        )}
      </GoogleMap>
    </MapWrapper>
  );
};
