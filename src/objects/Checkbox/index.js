import React from 'react';
import Input from '../Input';
import Label from '../Label';
import './styles.css';



const Checkbox = ({id="", value= "", content= "", onClick=""}) => (
  <>
    <Input id={id} value={value} type="checkbox" content={content} />
    <Label onClick={onClick} htmlFor={id} content={content} />
  </>
);

export default Checkbox;