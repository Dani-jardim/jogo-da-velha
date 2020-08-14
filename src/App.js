import React from 'react';
import Card from './components/Card';
import Player from './objects/Player';
import Header from './components/Header';

function App() {
  return (
  <>
    <Header />
    <Card />
    <Player player="x"/>
  </>
  );
}

export default App;
