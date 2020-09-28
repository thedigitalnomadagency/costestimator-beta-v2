import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//actions
import {
  addConfig,
  deleteConfig,
  resetConfig,
} from '../../redux/PriceConfig/config-actions';
import { signOut } from '../../redux/user/user-actions';

//styling
import { SettingsWrapper } from './SettingPage.styles';

export default () => {
  const minDist = useSelector((state) => state.config.minDistance);
  const prices = useSelector((state) => state.config.config);
  const dispatch = useDispatch();

  const [priceConfig, setConfig] = React.useState({
    maxDistance: '',
    price: '',
  });

  const { maxDistance, price } = priceConfig;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setConfig({
      ...priceConfig,
      [name]: value,
    });
  };

  const addPriceConfig = (e) => {
    e.preventDefault();

    if (+maxDistance === 0 || +price <= 0) {
      console.log('fields cannot be empty or price cannot be 0');
      return;
    }

    if (+maxDistance <= minDist) {
      console.log('max distance cannot be lower than minDistance');
      return;
    }

    dispatch(
      addConfig({
        minDistance: minDist,
        maxDistance: +maxDistance,
        price: +price,
      })
    );

    setConfig({
      maxDistance: '',
      price: '',
    });
  };

  const deletePriceConfig = (config) => {
    dispatch(deleteConfig(config));
  };

  const resetPriceConfig = () => {
    dispatch(resetConfig());
  };

  return (
    <SettingsWrapper>
      <div className="back">
        <Link to="/" className="back-btn">
          Back To Home
        </Link>

        <button className="signOut" onClick={() => dispatch(signOut())}>
          Sign Out
        </button>
      </div>
      <form className="form">
        <div className="input-wrapper">
          <label className="label" htmlFor="minDistance">
            Min Distance (km)
          </label>
          <input className="input" type="text" value={minDist} disabled />
        </div>

        <div className="input-wrapper">
          <label className="label" htmlFor="maxDistance">
            Max Distance (km)
          </label>
          <input
            className="input"
            name="maxDistance"
            type="number"
            value={maxDistance}
            onChange={handleChange}
          />
        </div>

        <div className="input-wrapper">
          <label className="label" htmlFor="price">
            Price (GH¢)
          </label>
          <input
            className="input"
            name="price"
            type="number"
            value={price}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="btn-wrapper">
        <button className="btn" onClick={addPriceConfig}>
          Add Price Config
        </button>

        <button className="btn btn-red" onClick={resetPriceConfig}>
          Reset Config
        </button>
      </div>

      <div className="config-wrapper">
        {prices.length > 0 ? (
          <>
            {prices.map((config, idx) => {
              return (
                <div key={idx} className="config">
                  <h1>Min Distance: {config.minDistance}KM</h1>
                  <h2>Max Distance: {config.maxDistance}KM</h2>
                  <h3>Price: GH¢{config.price}</h3>
                  {idx === prices.length - 1 && (
                    <button
                      className="delete"
                      onClick={() => deletePriceConfig(config)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h1>
              You have no configuration. Use form to set your price
              configurations
            </h1>{' '}
          </>
        )}
      </div>
    </SettingsWrapper>
  );
};
