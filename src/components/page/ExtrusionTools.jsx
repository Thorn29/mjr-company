import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Gallery from '../basic/Gallery';

const ExtrusionTools = () => {

  const data = useStaticQuery(graphql`query{
    imagelist: allFile(filter: {relativeDirectory: {eq: "ekstruzija"}}, sort: {fields: name}) {
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
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('tools.t3')} | MJR ${t('title')}` : 'Alati za ekstruziju | MJR Alatnica'} defer={false}>
        <meta name='description' content='Još jedna vrsta alata koje proizvodimo jesu alati za ekstruziju. Ovde možete pogledati neke od ekstrudiranih proizvoda obrađenih našim alatima.' />
      </Helmet>
      <h1 className='page-title'>{t('tools.t3')}</h1>
      <Gallery images={data.imagelist} />
    </div>
  );
}

export default ExtrusionTools;
