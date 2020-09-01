import React from 'react';
import './styles.css'

const Label = ({htmlFor, content, onClick}) => (
  <label onClick={onClick} className="label" htmlFor={htmlFor}>{content}</label>
)


export default Label;