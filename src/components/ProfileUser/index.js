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
    <dd className="socials">
      <IconSocial action="https://github.com/Dani-jardim" src={GitHub} alt="logo do Github" />
      <IconSocial action="https://linkedin.com/in/daniela-jardim/" src={Linkedin} alt="logo do Linkedin" />
      <IconSocial action="https://twitter.com/danijardim00" src={Twitter} alt="logo do twitter" />
      <IconSocial action="https://instagram.com/danijardim00/" src={Instagram} alt="logo do instagram" />
    </dd>
  </dl>

);

export default ProfileUser;