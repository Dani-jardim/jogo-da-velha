import React from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';

import Header from './components/Header';
import About from './objects/About';

import Hashtag from './components/Hashtag';


const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" type="checkbox" content="Mostrar Eventos" />
    <About />

  </main>
  )

export default App;
