import * as React from "react";
import { Helmet } from 'react-helmet';
import '../components/layout/Layout.css';
import Landing from '../components/basic/Landing';

const IndexPage = () => {

  return (
    <div className='landing-page'>
      <Helmet title='MJR Alatnica' defer={false} />
      <Landing />
    </div>
  );
}

export default IndexPage
