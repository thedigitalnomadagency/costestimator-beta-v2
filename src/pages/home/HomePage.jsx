import React, { useState, useCallback } from 'react';
import {
  DirectionsService,
  DirectionsRenderer,
  Autocomplete,
} from '@react-google-maps/api';

//components
import InputField from '../../components/InputField/InputField';
import Map from '../../components/Map/Map';

//styling
import { HomeWrapper } from './HomePage.styles';

export default () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirection] = useState(null);
  const [pickupAutocomplete, setPickupAutocomplete] = useState(null);
  const [destinationAutocomplete, setDestinationAutocomplete] = useState(null);

  const directionsCallback = useCallback((response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirection(response);
      }
    }
  }, []);

  const onPickupLoad = (autocomplete) => {
    setPickupAutocomplete(autocomplete);
  };

  const onDestinationLoad = (autocomplete) => {
    setDestinationAutocomplete(autocomplete);
  };

  const onPickupChanged = () => {
    if (pickupAutocomplete !== null) {
      const place = pickupAutocomplete.getPlace();
      if (place !== undefined) {
        setPickup(place.formatted_address);
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const onDestinationChanged = () => {
    if (destinationAutocomplete !== null) {
      const place = destinationAutocomplete.getPlace();
      if (place !== undefined) {
        setDestination(place.formatted_address);
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <>
      <HomeWrapper>
        <>
          <>
            {directions && (
              <div className="results">
                <h1>distance: {directions.routes[0].legs[0].distance.text}</h1>
                <h1>duration: {directions.routes[0].legs[0].duration.text}</h1>
              </div>
            )}
          </>
          <Map>
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

            <Autocomplete
              onLoad={onPickupLoad}
              onPlaceChanged={onPickupChanged}
            >
              <InputField placeholder="pickup location" />
            </Autocomplete>
            <Autocomplete
              onLoad={onDestinationLoad}
              onPlaceChanged={onDestinationChanged}
            >
              <InputField placeholder="destination location" />
            </Autocomplete>
          </Map>
        </>
      </HomeWrapper>
    </>
  );
};
