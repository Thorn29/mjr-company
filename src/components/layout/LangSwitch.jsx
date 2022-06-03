import React from 'react';
import { navigate } from 'gatsby';
import i18n from '../../i18n';
import './LangSwitch.css';

const LangSwitch = ({ type }) => {

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

  return(
    <div className={`lang-switch ${type}`}>
      <button className={`lang-switch__button ${i18n.language === 'sr' && 'active'}`} onClick={() => changeLang('sr')}>SRB</button>
      <button className={`lang-switch__button ${i18n.language === 'en' && 'active'}`} onClick={() => changeLang('en')}>ENG</button>
      <button className={`lang-switch__button`} onClick={() => navigate('/aufbau')}>DEU</button>
    </div>
  );
}

export default LangSwitch;
