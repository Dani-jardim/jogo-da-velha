import React from 'react';


const Input = ({id = "", value = "", type= "checkbox"}) => (

  <input className="input" id={id} type={type} value={value} />

);

export default Input;