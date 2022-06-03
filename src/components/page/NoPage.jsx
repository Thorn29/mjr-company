import React from 'react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ActionButton from '../layout/ActionButton';

const NoPage= () => {

  const { t } = useTranslation();

  return(
    <div className='container'>
      <Helmet title={`${t('error.title')} | MJR ${t('title')}`} defer={false} />
      <h4 className='error-text'>404</h4>
      <h5 className='special'>{t('error.text')}</h5>
      <div className='tiles'>
      <ActionButton width='150px' click={() => navigate('/o_nama')}>{t('error.button')}</ActionButton>
      </div>
    </div>
  );
}

export default NoPage;
