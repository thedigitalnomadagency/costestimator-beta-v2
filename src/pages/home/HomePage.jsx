import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import Search from '../../components/Search/Search';

//styling
import Wrapper from './HomePage.styles';
import MapTheme from './MapTheme';

const libraries = ['places'];

const mapContainerStyles = {
  height: '100%',
  width: '100%',
};

const options = {
  styles: MapTheme,
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

  const [pickup, setPickup] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [directions, setDirections] = React.useState(null);
  const [distance, setDistance] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [amount, setAmount] = React.useState(0);

  const handleChange = (e) => {
    const { value } = e.target;

    setAmount(+value);
  };

  const calculatePrice = React.useCallback(
    (distance) => {
      const price = priceConfig.find(
        (config) =>
          distance <= config.maxDistance && distance >= config.minDistance
      );

      if (price) {
        const newPrice = price.price;
        setPrice(newPrice);
      } else {
        setPrice(0);
      }
    },
    [priceConfig]
  );

  const subtract = () => {
    if (price && amount) {
      const newPrice = price - amount;
      setPrice(newPrice);
    }
  };

  const add = () => {
    if (price && amount) {
      const newPrice = price + amount;
      setPrice(newPrice);
    }
  };

  const directionsCallback = React.useCallback((response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
        setDistance(response.routes[0].legs[0].distance.value / 1000);
      }
    }
  }, []);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading Map...';

  return (
    <Wrapper>
      <div className="message">
        <h1>App can only be used on an iPad or Desktop</h1>
      </div>
      <div className="app">
        <div className="form-container">
          <div className="title-wrapper">
            <div className="title">
              <h1>Cost Estimator</h1>
            </div>

            <Link to="/settings">
              <div className="config-link">
                <h1>Configure</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="form-wrapper">
            <Search setAddress={setPickup} placeholder="Pickup Location" />
            <Search
              setAddress={setDestination}
              placeholder="Destination Location"
            />

            <button onClick={() => calculatePrice(distance)}>Get Price</button>
          </div>

          <div className="divide"></div>

          <div className="price-wrapper">
            <div className="amount-box">
              <h3>Amount - GH¢</h3>
              <h1>{price ? price.toFixed(2) : '0.00'}</h1>
            </div>
            <div className="input-box">
              <h3>Amount to + / -</h3>
              <input
                type="number"
                name="amount"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="controls-box">
              <button className="control-btn" onClick={add}>
                +
              </button>
              <button className="control-btn" onClick={subtract}>
                -
              </button>
            </div>
          </div>

          {price && directions !== null && (
            <div className="summary-wrapper">
              <h1>Summary:</h1>
              <div className="summary">
                <h1 className="text">
                  Distance: {directions.routes[0].legs[0].distance.text}
                </h1>
                <h1 className="text">
                  Duration: {directions.routes[0].legs[0].duration.text}
                </h1>
              </div>
            </div>
          )}
        </div>

        <div className="map-container">
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

            {price !== 0 && (
              <DirectionsRenderer
                options={{
                  directions: directions,
                }}
              />
            )}
          </GoogleMap>
        </div>
      </div>
    </Wrapper>
  );
};
