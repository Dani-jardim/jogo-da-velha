import React from 'react';
import './styles.css';

const AvatarProfile = ({src, alt}) => (
  <img className="avatar-profile" src={src} alt={alt}></img>
);

export default AvatarProfile;