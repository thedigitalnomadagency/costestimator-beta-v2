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

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (currentUser ? <Home /> : <Redirect to="/signin" />)}
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
