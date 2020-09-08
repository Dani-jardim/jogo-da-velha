import React from 'react';
import "./styles.css"
import TagGame from '../../objects/TagGame';

const HistoryGame = ({className= ""}) => (
  <ol className ={`history-game ${className}`}>
    <li className="action">
      <TagGame content="Adicionou x"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou x"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou x"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou x"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou x"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou x"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou x"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou x" />
    </li>
    <li className="action">
      <TagGame className="-end" content="Empate!" />
    </li>
  </ol>
)

export default HistoryGame;