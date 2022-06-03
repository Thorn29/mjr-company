import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductLink from './ProductLink';
import './ProductLinks.css';

import Plastika from '../../images/basic/plastika.jpg';
import Guma from '../../images/basic/guma.jpg';
import Ekstruzija from '../../images/basic/ekstruzija.jpg';
import Lim from '../../images/basic/lim.jpg';
import Bakelit from '../../images/basic/bakelit.jpg';
import Aluminijum from '../../images/basic/aluminijum.jpg';
import Delovi from '../../images/basic/delovi.jpg';

const ProductLinks = () => {

  const { t } = useTranslation();

  return(
    <>
      <p className='product-links-text'>{t('products.r1')}</p>
      <div className='product-links'>
        <ProductLink url='/alati/plastika' image={Plastika}>{t('menu.m1')}</ProductLink>
        <ProductLink url='/alati/guma' image={Guma}>{t('menu.m2')}</ProductLink>
        <ProductLink url='/alati/ekstruzija' image={Ekstruzija}>{t('menu.m3')}</ProductLink>
        <ProductLink url='/alati/lim' image={Lim}>{t('menu.m4')}</ProductLink>
        <ProductLink url='/alati/bakelit' image={Bakelit}>{t('menu.m5')}</ProductLink>
        <ProductLink url='/alati/aluminijum' image={Aluminijum}>{t('menu.m6')}</ProductLink>
        <ProductLink url='/alati/delovi' image={Delovi}>{t('menu.m7')}</ProductLink>
      </div>
    </>
  );
}

export default ProductLinks;
