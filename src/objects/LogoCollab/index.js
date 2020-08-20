import React from 'react';
import collabCode from '../../img/logo.png';
import collabCodeLight from '../../img/logo-light.png';


const LogoCollab = ({ light = false }) => (
  <img className="logo-collab" 
    src= {light ? collabCodeLight : collabCode} 
    alt="logo da CollabCode"/>
)

export default LogoCollab;