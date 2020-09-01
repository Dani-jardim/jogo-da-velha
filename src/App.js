import React, { useState } from 'react';
import './App.css';

import Checkbox from './objects/Checkbox';
import About from './objects/About';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';

const App = () => {
  const [activeAbout, setActiveAbout] = useState ("")

  const handleClickAdd = () => setActiveAbout ("-active") 
  const handleClickRemove = () => setActiveAbout ("")

  return (
    <main id="main" className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar Eventos" />
      
      <About className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </About>
    </main>
  )
};

export default App;
