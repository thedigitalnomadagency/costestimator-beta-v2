import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import TitleBar from './components/TitleBar/TitleBar';

//pages
import Home from './pages/home/HomePage';
import Settings from './pages/settings/SettingsPage';

//styling
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TitleBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </>
  );
};

export default App;
