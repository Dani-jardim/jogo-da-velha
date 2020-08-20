import React from 'react';
import "./styles.css";
import Profile from '../../img/avatar-profile.png';
import GitHub from '../../img/gitHub.png';
import Linkedin from '../../img/linkedin.png';
import Twitter from '../../img/twitter.png';
import Instagram from '../../img/instagram.png';


import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';



const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile className="avatar-profile" src={Profile} alt= "Avatar Daniela" />
    </dd>
    <dt className="title">Dani Jardim</dt>
    <dd className="description">Sou designer gráfica e frontend em início de carreira. Moro em São Paulo. As minhas stacks atuais são: Html, CSS, JavaScript e React</dd>
    <dd>
      <IconSocial src={GitHub} alt="logo do Github" />
      <IconSocial src={Linkedin} alt="logo do Github" />
      <IconSocial src={Twitter} alt="logo do Github" />
      <IconSocial src={Instagram} alt="logo do Github" />
    </dd>
  </dl>

);

export default ProfileUser;