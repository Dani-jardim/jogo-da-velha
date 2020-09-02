import React, { useState } from 'react';
import './styles.css';
import Card from '../Card';
import Player from '../../objects/Player';

const Hashtag = () => {
  const [nextPlayer, setNextPlayer] = useState("x")
  const [players, setPlayers] = useState([
    {id: 1, content: ''},
    {id: 2, content: ''},
    {id: 3, content: ''},
    {id: 4, content: ''},
    {id: 5, content: ''},
    {id: 6, content: ''},
    {id: 7, content: ''},
    {id: 8, content: ''},
    {id: 9, content: ''}
  ])
  
  const handleClick = (id) => {
    console.log("jogador", nextPlayer) 
    console.log(id)

    setPlayers(old => old.map(player => player.id ==='id' ? {id, content: nextPlayer}: player))
    

    setNextPlayer (old => old === 'x'? "o" : "x" )
  }

  return (
    <Card >
      <ul className="hashtag">
        {players.map(player => 
          <li key={player.id} className="item" onClick={() => handleClick(player.id)}>
            <Player id={player.id} content={player.content} /></li>)}
      </ul>
    </Card>
  )
};



export default Hashtag;