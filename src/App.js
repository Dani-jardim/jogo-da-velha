import React from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import About from './objects/About';
import AboutLink from './objects/AboutLink';
import IconClose from './objects/IconClose';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import LogoCollab from './objects/LogoCollab';


const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" type="checkbox" content="Mostrar Eventos" />
    
    <About>
      <LogoCollab light />
      <AboutLink className="-light" />
      <IconClose />
    </About>
    

  </main>
  )

export default App;
