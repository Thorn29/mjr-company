import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return(
    <I18nextProvider i18n={i18n}>
      <div className='layout'>
      <Header />
      {children}
      <Footer />
      </div>
    </I18nextProvider>
  );
}

export default Layout;
