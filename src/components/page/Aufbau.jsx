import React from 'react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ActionButton from '../layout/ActionButton';
import UCImage from '../../images/basic/uc.png';

const Aufbau = () => {

  const { t } = useTranslation();

  return(
    <div>
      <Helmet title={`Aufbau | MJR ${t('title')}`} defer={false} />
      <h1 className='page-title'>Die deutsche Version ist noch im Aufbau</h1>
      <h5 className='special'>Besuchen sie uns bald wieder</h5>
      <img src={UCImage} alt='Aufbau' style={{ display: 'block', width: '90%', maxWidth: '350px', margin: '15px auto'}} />
      <div className='tiles'>
      <ActionButton width='150px' click={() => navigate(-1)}>Zurück</ActionButton>
      </div>
    </div>
  );
}

export default Aufbau;
