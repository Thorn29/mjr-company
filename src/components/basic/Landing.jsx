import React from 'react';
import { navigate } from 'gatsby';
import ActionButton from '../layout/ActionButton';
import i18n from '../../i18n';
import './Landing.css';

const Landing = () => {

  const enter = (lang) => {
    i18n.changeLanguage(lang);
    navigate('/o_nama');
  };

  return(
    <div className='landing'>
      <div className='landing__logo'>
        <div className='landing__circle'>
        </div>
      </div>
      <div className='landing__links'>
        <ActionButton click={() => enter('sr')}>Srpski</ActionButton>
        <ActionButton click={() => enter('en')}>English</ActionButton>
        <ActionButton click={() => navigate('/aufbau')}>Deutsch</ActionButton>
      </div>
    </div>
  );
}

export default Landing;
