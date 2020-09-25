import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyles from './styles/global';

import Board from './components/Board';
import FloatingButton from './components/FloatingButton';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />
      <Navigation />
      <Main>
        <Header />
        <Board />
        <FloatingButton />
      </Main>
    </DndProvider>
  );
}

export default App;
