import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Gallery from '../basic/Gallery';

const SpareParts = () => {

  const data = useStaticQuery(graphql`query{
    imagelist: allFile(filter: {relativeDirectory: {eq: "delovi"}}, sort: {fields: name}) {
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
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('tools.t7')} | MJR ${t('title')}` : 'Rezervni delovi | MJR Alatnica'} defer={false}>
        <meta name='description' content='Proizvodimo sve vrste rezervnih delova za razne mašine, sklopove, reduktore, zupčanike, merne letve kao i razne vrste žigova i gravura.' />
      </Helmet>
      <h1 className='page-title'>{t('tools.t7')}</h1>
      <p className='text'><Trans i18nKey='tools.t7p1' components={[<strong />]} /></p>
      <Gallery images={data.imagelist} />
    </div>
  );
}

export default SpareParts;
