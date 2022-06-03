import React, { Component } from 'react';
import axios from 'axios';
import { withTranslation } from "react-i18next";
import InputField from './InputField';
import './ContactForm.css';

class ContactForm extends Component {

  state={
   inputs: {
     ime: '',
     email: '',
     poruka: ''
   },
   errors: {
     ime: '',
     email: '',
     poruka: ''
   },
   success: false,
   error: false
  };

  render() {

    const { inputs, errors, success, error } = this.state;
    const { t } = this.props;

    const inputHandler = e => this.setState({ inputs: {...inputs, [e.target.name]: e.target.value}});

    const validateForm = (data) => {
      const nameCheck = /^[A-Za-z\s]+$/;
      const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (data.ime.trim().length <= 0) {
        return { error: 'ime', code: 'e1'}
      }
      if (data.email.trim().length <= 0) {
        return { error: 'email', code: 'e2'}
      }
      if (data.poruka.trim().length <= 0) {
        return { error: 'poruka', code: 'e3'}
      }
      if (!data.ime.match(nameCheck)) {
        return { error: 'ime', code: 'e4'}
      }
      if (!data.email.match(emailCheck)) {
        return { error: 'email', code: 'e5'}
      }
      else return;
    }

    const formSubmit = (e) => {
      e.preventDefault();
      const validationError = validateForm(inputs);

      if (validationError) return this.setState({ errors: {...errors, [validationError.error]: t(`contact.${validationError.code}`)}});

      else {
        axios.post('http://mjralatnica.com/send.php', inputs).then(res => this.setState({ inputs: { ime: '', email: '', poruka: ''}, errors: { ime: '', email: '', poruka: ''}, success: true })).catch(err => this.setState({ errors: { ime: '', email: '', poruka: ''}, error: true }));
      }
    };

    if (success === true) {
      setTimeout(() => this.setState({ success: false }), 3000);
      return <p className='sentmessage'>{t('contact.sm')}</p>
    }

    if (error === true) {
      setTimeout(() => this.setState({ error: false }), 3000);
      return <p className='sentmessage red'>{t('contact.fm')}</p>
    }

    return(
      <div className='contact-form'>
      <p className='contact-form__address'>office@mjralatnica.com</p>
      <form className='contact-form__form' onSubmit={formSubmit}>
        <InputField change={inputHandler} label={t('contact.cf1')} errormsg={errors.ime} type='text' name='ime' required />
        <InputField change={inputHandler} label={t('contact.cf2')} errormsg={errors.email} type='email' name='email' required />
        <InputField change={inputHandler} label={t('contact.cf3')} errormsg={errors.poruka} type='text' name='poruka' required />
      <input type='submit' value={t('contact.sb')} className='contact-form__submit' />
      </form>
      </div>
    )
  }
};

export default withTranslation()(ContactForm);
