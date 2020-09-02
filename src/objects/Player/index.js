import React, { useState } from 'react';
import './styles.css';
import playerX from '../../img/player-x.png';
import playerO from '../../img/player-o.png';

// const handleClick = () =>{
//   console.log("cliquei")
// }


const Player = ({player = false}) => {
  const [statePlayer, setStatePlayer] = useState(player)
    const players = [];
    players ['x'] = playerX;
    players ['o'] = playerO;

const handleClick = () => setStatePlayer('x')

 return ( 
  <button onClick={handleClick} className="player-game">
    {statePlayer && <img src= {players [statePlayer]} alt={`Jogador ${statePlayer.toUpperCase()}`}/>}
  </button>)
};

export default Player; 