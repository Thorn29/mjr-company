import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import Map from './Map';
import './ContactData.css';

const ContactData = () => {

  const { t } = useTranslation();

  return(
    <div className='contact-data'>
    <div className='contact-data__section'>
      <p className='text'>{t('contact.a1')}</p>
      <p className='contact-data__numbers'><strong>+381-22-560-594</strong> | <strong>+381-22-559-002</strong> | <strong>+381-22-558-002</strong></p>
      <ContactForm />
    </div>
    <div className='contact-data__section'>
      <p className='text'>Dušana Jerkovića 48A, 22320 Inđija, Srbija</p>
      <Map />
    </div>
    </div>
  );
}

export default ContactData;
