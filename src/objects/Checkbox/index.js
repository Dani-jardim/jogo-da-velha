import React from 'react';
import Input from '../Input';
import Label from '../Label';
import './styles.css';

const handleClick = () => {
  console.log("aqui")
}

const Checkbox = ({id="", value= "", content= ""}) => (
  <>
    <Input id={id} value={value} type="checkbox" content={content} />
    <Label onClick={handleClick} htmlFor={id} content={content} />
  </>
);

export default Checkbox;