import React from 'react';
import Profile from '../../img/avatar-profile.png'

import AvatarProfile from '../../objects/AvatarProfile';


const ProfileUser = () => (
  <dl>

    <dd>
      <AvatarProfile src={Profile} alt= "Avatar Daniela" />
    </dd>
    <dd>
      Eu sou a Dani, sou designer gráfica e frontend em início de carreira. Moro em São Paulo. As minhas stacks atuais são: Html, CSS, JavaScript e React
    </dd>

    <dt>Dani Jardim</dt>
  </dl>

);

export default ProfileUser;