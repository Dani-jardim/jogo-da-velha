import React from 'react';
import './styles.css';
import playerX from '../../img/player-x.png';
import player0 from '../../img/player-0.png';

const Player = (props) => {
    const players = [];
    players ['x'] = playerX;
    players ['0'] = player0;

 return ( 
  <button className="player">
    <img src= {players [props.players]} alt="Jogador"/>
  </button>)
};

export default Player; 