import React from 'react';
import "./styles.css";
import Profile from '../../img/avatar-profile.png'

import AvatarProfile from '../../objects/AvatarProfile';


const ProfileUser = () => (
  <dl className="profile-user">

    <dd className="avatar">
      <AvatarProfile src={Profile} alt= "Avatar Daniela" />
    </dd>
    <dt className="title">Dani Jardim</dt>
    <dd className="description">Sou designer gráfica e frontend em início de carreira. Moro em São Paulo. As minhas stacks atuais são: Html, CSS, JavaScript e React
    </dd>

  </dl>

);

export default ProfileUser;