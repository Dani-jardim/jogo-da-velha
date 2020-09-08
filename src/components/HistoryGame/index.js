import React from 'react';
import "./styles.css"
import TagGame from '../../objects/TagGame';

const HistoryGame = ({history, className= ""}) => (
  <ol className ={`history-game ${className}`}>
    {history.map((content, key) => (
      <li key={key} className="action">
        <TagGame content={content}/>
      </li>
    ))}
  </ol>
)

export default HistoryGame;