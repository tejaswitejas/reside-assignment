import './App.css';
import { Background } from './components/Background/Background';
import { AppContextProvider } from './state/context/AppContext';
// import PaginatedItems from './components/PaginatedItems/PaginatedItems';
import React from 'react';
import { Header } from './components/Header/Header';
import Images from './components/Images/Images';
function App() {
  // var isMobile =
  //   Math.min(window.screen.width, window.screen.height) < 768 ||
  //   navigator.userAgent.indexOf('Mobi') > -1;

  return (
    <div className="App">
      <Background />
      <AppContextProvider>
        <Header />
        <Images />
      </AppContextProvider>
    </div>
  );
}

export default App;
