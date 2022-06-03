import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Gallery from '../basic/Gallery';

const RubberTools = () => {

  const data = useStaticQuery(graphql`query{
    imagelist: allFile(filter: {relativeDirectory: {eq: "guma"}}, sort: {fields: name}) {
    nodes {
      id
      name
      childImageSharp {
        gatsbyImageData(
          quality: 90
        )
      }
    }
  }
      }`);

  const { t } = useTranslation();

  return(
    <div className='container'>
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('tools.t2')} | MJR ${t('title')}` : 'Alati za gumu | MJR Alatnica'} defer={false}>
        <meta name='description' content='Imamo veliko iskustvo stečeno pravljenjem raznovrsnih alata za proizvodnju gumenih proizvoda, npr. semeringa, zakački, nosača, papučica za automobilsku industriju, itd.' />
      </Helmet>
      <h1 className='page-title'>{t('tools.t2')}</h1>
      <p className='text'><Trans i18nKey='tools.t2p1' components={[<strong />, <br />]} /></p>
      <Gallery images={data.imagelist} />
    </div>
  );
}

export default RubberTools;
