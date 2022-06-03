import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterMenu from '../navigation/FooterMenu';
import LangSwitch from './LangSwitch';
import './Footer.css';

const Footer = () => {

  const { t } = useTranslation();

  return(
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__head'>
          <h1 className='footer__title'><strong>MJR</strong> {t('title')}</h1>
          <p className='footer__subtitle'>{t('subtitle')}</p>
        </div>
        <FooterMenu />
      </div>
      <LangSwitch type='foot' />
      <hr className='footer__line' />
      <p className='footer__signature'>Thorn29 <strong>2018</strong></p>
    </footer>
  );
}

export default Footer;
