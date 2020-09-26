import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/home/HomePage';
import Settings from './pages/settings/SettingsPage';
import Signin from './pages/auth/SigninPage';
import Register from './pages/auth/RegisterPage';

//styling
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </>
  );
};

export default App;
