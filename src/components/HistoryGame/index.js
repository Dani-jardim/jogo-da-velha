import React from 'react';
import TagGame from '../../objects/TagGame';

const HistoryGame = () => (
  <ol className ="history-game">
    <li className="action">
      <TagGame content="Adicionou ${x}"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou ${x}"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou ${x}"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou ${x}"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou ${x}"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou ${x}"/>
    </li>
    <li className="action">
      <TagGame content="Adicionou ${x}"/>
    </li>
    <li className="action">
      <TagGame />
    </li>
  </ol>
)

export default HistoryGame;