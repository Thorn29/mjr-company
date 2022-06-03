import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ImageBox from '../basic/ImageBox';
import MachineList from '../basic/MachineList';

import Hasco from '../../images/basic/hasco.png';
import Meusburger from '../../images/basic/meusburger.png';
import Kern from '../../images/basic/kern.png';

const About = () => {

  const data = useStaticQuery(graphql`query{
    img1: file(relativePath: { eq: "basic/image1.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 390
            placeholder: BLURRED
          )
          }
        }
    img2: file(relativePath: { eq: "basic/offices.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 390
            placeholder: BLURRED
          )
          }
       }
    img3: file(relativePath: { eq: "basic/machines.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 390
            placeholder: BLURRED
          )
          }
        }
      }`);

  const { t } = useTranslation();

  return(
    <div className='container'>
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('about.title')} | MJR ${t('title')}` : 'O Nama | MJR Alatnica'} defer={false}>
        <meta name='description' content='MJR Alatnica se bavi konstrukcijom i izradom alata. Poslujemo od 1990. godine i nudimo veoma širok asortiman proizvoda i usluga.' />
      </Helmet>
      <h1 className='page-title'>{t('about.title')}</h1>
      <ImageBox type='right png' img={data.img1}><Trans i18nKey='about.p1' components={[<strong />, <br />]} /></ImageBox>
      <div className='tiles'>
        <ImageBox type='top' title={t('about.t1')} img={data.img2}>{t('about.p2')}</ImageBox>
        <ImageBox type='top' title={t('about.t2')} img={data.img3}>{t('about.p3')}</ImageBox>
      </div>
      <MachineList />
      <p className='text'>{t('about.p4')}</p>
      <div className='tiles'>
        <a className='image-link' href='https://www.hasco.com/' target='_blank' rel="noopener noreferrer"><img src={Hasco} alt='Hasco' /></a>
        <a className='image-link' href='https://www.meusburger.com/' target='_blank' rel="noopener noreferrer"><img src={Meusburger} alt='Meusburger' /></a>
        <a className='image-link' href='https://www.kern.si/' target='_blank' rel="noopener noreferrer"><img src={Kern} alt='Kern' /></a>
      </div>
    </div>
  );
}

export default About;
