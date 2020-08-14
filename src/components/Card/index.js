import React from 'react';
import Game from '../../objects/Game';
import Player from '../../objects/Player';

const Card = (props) => (

<article className="card">
  {props.children}
</article>


);

export default Card;