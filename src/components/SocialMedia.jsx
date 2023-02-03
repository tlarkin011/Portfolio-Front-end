import React from 'react';
import {  FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">
    <div >
    <a href={'https://www.facebook.com/trevor.larkin.71/'}>
      <FaFacebookF />
    </a>  
    </div>
    <div>
      <a href='https://www.linkedin.com/in/trevor-larkin-530a98130/'>
      <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;