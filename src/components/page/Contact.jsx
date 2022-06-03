import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ContactData from '../contact/ContactData';

import Download1 from '../../downloads/PDV obrazac.pdf';
import Download2 from '../../downloads/Podaci za identifikaciju.pdf';

const Contact = () => {

  const { t } = useTranslation();

  return(
    <div className='container'>
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('contact.title')} | MJR ${t('title')}` : 'Kontakt | MJR Alatnica'} defer={false}>
        <meta name='description' content='Kontaktirajte nas putem telefona, pošaljite nam e-mail, ili nas posetite direktno na adresi' />
      </Helmet>
      <h1 className='page-title'>{t('contact.title')}</h1>
      <ContactData />
      <div className='tiles'>
        <a href={Download1} className='down-button'>{t('contact.db1')}</a>
        <a href={Download2} className='down-button'>{t('contact.db2')}</a>
      </div>
    </div>
  );
}

export default Contact;
