import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import './FooterMenu.css';

const FooterMenu = () => {

  const { t } = useTranslation();

  return(
    <div className='footer-menu'>
      <div className='footer-menu__cont'>
        <h2 className='footer-menu__title'>{t('menu.lt')}</h2>
        <Link to='/o_nama' className='footer-menu__link' activeClassName='active'>{t('menu.l1')}</Link>
        <Link to='/reference' className='footer-menu__link' activeClassName='active'>{t('menu.l2')}</Link>
        <Link to='/proizvodi' className='footer-menu__link' activeClassName='active'>{t('menu.l3')}</Link>
        <Link to='/kontakt' className='footer-menu__link' activeClassName='active'>{t('menu.l4')}</Link>
      </div>
      <div className='footer-menu__cont'>
        <h2 className='footer-menu__title'>{t('menu.mt')}</h2>
        <Link to='/usmerivac_vazduha' className='footer-menu__link' activeClassName='active'>{t('menu.m8')}</Link>
        <Link to='/alati/plastika' className='footer-menu__link' activeClassName='active'>{t('menu.m1')}</Link>
        <Link to='/alati/guma' className='footer-menu__link' activeClassName='active'>{t('menu.m2')}</Link>
        <Link to='/alati/ekstruzija' className='footer-menu__link' activeClassName='active'>{t('menu.m3')}</Link>
        <Link to='/alati/lim' className='footer-menu__link' activeClassName='active'>{t('menu.m4')}</Link>
        <Link to='/alati/bakelit' className='footer-menu__link' activeClassName='active'>{t('menu.m5')}</Link>
        <Link to='/alati/aluminijum' className='footer-menu__link' activeClassName='active'>{t('menu.m6')}</Link>
        <Link to='/alati/delovi' className='footer-menu__link' activeClassName='active'>{t('menu.m7')}</Link>
      </div>
    </div>
  );
}

export default FooterMenu;
