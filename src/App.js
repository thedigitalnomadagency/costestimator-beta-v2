import React from 'react';

//components
import TitleBar from './components/TitleBar/TitleBar';

//pages
import Home from './pages/home/HomePage';

const App = () => {
  return (
    <>
      <TitleBar />
      <Home />
    </>
  );
};

export default App;
