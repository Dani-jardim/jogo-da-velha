import React, { useState } from 'react';
import './styles.css';
import Card from '../Card';
import Player from '../../objects/Player';

const Hashtag = () => {
  const [nextPlayer, setNextPlayer] = useState("x")
  const handleClick = () => {
    console.log("jogardor", nextPlayer) 
      setNextPlayer (old => old === 'x'? "o" : "x" )
  }
  return (
    <Card >
      <ul className="hashtag" onClick={handleClick}>
        <li className="item"><Player /></li>
        <li className="item"><Player /></li>
        <li className="item"><Player /></li>

        <li className="item"><Player /></li>
        <li className="item"><Player /></li>
        <li className="item"><Player /></li>

        <li className="item"><Player /></li>
        <li className="item"><Player /></li>
        <li className="item"><Player /></li> 
      </ul>
    </Card>
  )
};



export default Hashtag;