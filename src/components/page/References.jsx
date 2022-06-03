import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ImageBox from '../basic/ImageBox';

const References = () => {

  const { t } = useTranslation();

  return(
    <div className='container'>
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('refs.title')} | MJR ${t('title')}` : 'Reference | MJR Alatnica'} defer={false}>
        <meta name='description' content='Imamo tradiciju dugu preko 30 godina, i sarađujemo sa velikim brojem različitih partnera i klijenata, ovde možete pročitati više o tome' />
      </Helmet>
      <h1 className='page-title'>{t('refs.title')}</h1>
      <ImageBox globe><Trans i18nKey='refs.p1' components={[<strong />]} /></ImageBox>
      <p className='text'>{t('refs.p2')}</p>
      <p className='text'><Trans i18nKey='refs.p3' components={[<strong />]} /></p>
    </div>
  );
}

export default References;
