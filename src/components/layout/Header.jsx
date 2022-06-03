import React from 'react';
import { useTranslation } from 'react-i18next';
import MainMenu from '../navigation/MainMenu';
import LangSwitch from './LangSwitch';
import './Header.css';

const Header = () => {

  const { t } = useTranslation();

  return(
    <header className='header'>
      <h1 className='header__title'><strong>MJR </strong> {t('title')}<span className="header__shade">&nbsp;</span></h1>
      <MainMenu />
      <LangSwitch type='head' />
    </header>
  );
}

export default Header;
