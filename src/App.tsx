import React from 'react';

import GlobalStyles from './styles/global';

import Board from './components/Board';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Board />
    </>
  );
}

export default App;
