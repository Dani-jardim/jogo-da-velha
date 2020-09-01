import React from 'react';
import './styles.css';
import Card from '../Card';
import Player from '../../objects/Player';

const Hashtag = () => (
  <Card >
    <ul className="hashtag">
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

);



export default Hashtag;