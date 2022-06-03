import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Gallery from '../basic/Gallery';

const TinTools = () => {

  const data = useStaticQuery(graphql`query{
    imagelist: allFile(filter: {relativeDirectory: {eq: "lim"}}, sort: {fields: name}) {
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
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('tools.t4')} | MJR ${t('title')}` : 'Alati za štancovanje lima | MJR Alatnica'} defer={false}>
        <meta name='description' content='Podrazumeva probijanje, savijanje, bigovanje i utiskivanje. Pored toga u mogućnosti smo da napravimo i razne vrste alata za kovanje.' />
      </Helmet>
      <h1 className='page-title'>{t('tools.t4')}</h1>
      <p className='text'>{t('tools.t4p1')}</p>
      <Gallery images={data.imagelist} />
    </div>
  );
}

export default TinTools;
