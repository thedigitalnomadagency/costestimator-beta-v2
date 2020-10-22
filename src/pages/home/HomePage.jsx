import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
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

export default ({
  pickup,
  setPickup,
  destination,
  setDestination,
  directions,
  distance,
  error,
  loading,
  handleChange,
  calculatePrice,
  subtract,
  add,
  directionsCallback,
  price,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return 'Could not load app. Check internet connection';
  if (!isLoaded) return 'Loading Map...';

  return (
    <Wrapper>
      <div className="desktop">
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

            <button
              className="price-btn"
              onClick={() => calculatePrice(distance)}
            >
              {loading ? 'Fetching...' : 'Get Price'}
            </button>
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

          {directions !== null && (
            <div className="summary-wrapper">
              <h1>Summary:</h1>
              <div className="summary">
                <div>
                  <h1 className="text">
                    Pickup: {directions.routes[0].legs[0].start_address}
                  </h1>
                  <h1 className="text">
                    Destination: {directions.routes[0].legs[0].end_address}
                  </h1>
                </div>

                <h1 className="text">
                  Distance: {directions.routes[0].legs[0].distance.text}
                </h1>
                <h1 className="text">
                  Duration: {directions.routes[0].legs[0].duration.text}
                </h1>
              </div>
            </div>
          )}

          {error && (
            <div className="summary-wrapper">
              <div className="summary">
                <h1 className="text error">{error}</h1>
              </div>
            </div>
          )}

          <div className="footer">
            <h1>Powered by Kwawco</h1>
          </div>
        </div>

        <GoogleMap
          mapContainerStyle={mapContainerStyles}
          zoom={14}
          center={center}
          options={options}
        >
          <DirectionsService
            options={{
              destination: destination,
              origin: pickup,
              travelMode: 'DRIVING',
            }}
            callback={directionsCallback}
          />

          {directions !== null && (
            <DirectionsRenderer
              options={{
                directions: directions,
              }}
            />
          )}
        </GoogleMap>
      </div>

      <div className="mobile">
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
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={mapContainerStyles}
            zoom={14}
            center={center}
            options={options}
          >
            <DirectionsService
              options={{
                destination: destination,
                origin: pickup,
                travelMode: 'DRIVING',
              }}
              callback={directionsCallback}
            />

            {directions !== null && (
              <DirectionsRenderer
                options={{
                  directions: directions,
                }}
              />
            )}
          </GoogleMap>

          <div className="mobile-form">
            <div className="form-wrapper">
              <Search setAddress={setPickup} placeholder="Pickup Location" />
              <Search
                setAddress={setDestination}
                placeholder="Destination Location"
              />

              <button
                className="price-btn"
                onClick={() => calculatePrice(distance)}
              >
                {loading ? 'Fetching...' : 'Get Price'}
              </button>
            </div>

            <div className="results">
              <h1>See Results Below</h1>
            </div>

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

            {directions !== null && (
              <div className="summary-wrapper">
                <h1>Summary:</h1>
                <div className="summary">
                  <div>
                    <h1 className="text">
                      Pickup: {directions.routes[0].legs[0].start_address}
                    </h1>
                    <h1 className="text">
                      Destination: {directions.routes[0].legs[0].end_address}
                    </h1>
                  </div>
                  <h1 className="text">
                    Distance: {directions.routes[0].legs[0].distance.text}
                  </h1>
                  <h1 className="text">
                    Duration: {directions.routes[0].legs[0].duration.text}
                  </h1>
                </div>
              </div>
            )}

            {error && (
              <div className="summary-wrapper">
                <div className="summary">
                  <h1 className="text error">{error}</h1>
                </div>
              </div>
            )}

            <div className="footer">
              <h1>Powered by Kwawco</h1>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
