import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//pages
import Home from './pages/home/HomePage';
import Settings from './pages/settings/SettingsPage';
import Signin from './pages/auth/SigninPage';
import Register from './pages/auth/RegisterPage';

//actions
import { checkUserSesssion } from './redux/user/user-actions';

//styling
import GlobalStyle from './GlobalStyle';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  React.useEffect(() => {
    dispatch(checkUserSesssion());
  }, [dispatch]);

  //state and methods
  const priceConfig = useSelector((state) => state.config.config);

  const [pickup, setPickup] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [directions, setDirections] = React.useState(null);
  const [distance, setDistance] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setAmount(+value);
  };

  const calculatePrice = React.useCallback(
    (distance) => {
      if (distance <= 0) {
        setError('Set pickup and destination locations');
        return;
      }

      if (priceConfig.length === 0) {
        setError('Set your price configurations');
        return;
      }

      setLoading(true);
      const length = priceConfig.length;
      const maxDistance = priceConfig[length - 1].maxDistance;

      const price = priceConfig.find((config) => {
        if (config.maxDistance === maxDistance && distance > maxDistance) {
          return true;
        }

        if (distance <= config.maxDistance && distance >= config.minDistance) {
          return true;
        }

        return false;
      });

      if (price) {
        const newPrice = price.price;
        setPrice(newPrice);
        setError('');
        setLoading(false);
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
        setError('');
      }
    }
  }, []);
  //end

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              currentUser ? (
                <Home
                  pickup={pickup}
                  setPickup={setPickup}
                  destination={destination}
                  setDestination={setDestination}
                  directions={directions}
                  distance={distance}
                  price={price}
                  error={error}
                  loading={loading}
                  handleChange={handleChange}
                  calculatePrice={calculatePrice}
                  subtract={subtract}
                  add={add}
                  directionsCallback={directionsCallback}
                />
              ) : (
                <Redirect to="/signin" />
              )
            }
          />
          <Route
            exact
            path="/settings"
            render={() =>
              currentUser ? <Settings /> : <Redirect to="/signin" />
            }
          />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Signin />)}
          />
          <Route
            exact
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <Register />)}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
