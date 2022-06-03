import React from 'react';
import { useTranslation } from 'react-i18next';
import MainMenuLink from './MainMenuLink';
import './MainMenu.css';

const MainMenu = () => {

  const { t } = useTranslation();

  return(
    <div className='main-menu'>
      <MainMenuLink url='/o_nama'>{t('menu.l1')}</MainMenuLink>
      <MainMenuLink url='/reference'>{t('menu.l2')}</MainMenuLink>
      <MainMenuLink url='/proizvodi'>{t('menu.l3')}</MainMenuLink>
      <MainMenuLink url='/kontakt'>{t('menu.l4')}</MainMenuLink>
    </div>
  );
}

export default MainMenu;
