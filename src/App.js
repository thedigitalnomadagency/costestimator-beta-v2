import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';

//pages
import Home from './pages/home/HomePage';
import Settings from './pages/settings/SettingsPage';

//styling
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    </>
  );
};

export default App;
