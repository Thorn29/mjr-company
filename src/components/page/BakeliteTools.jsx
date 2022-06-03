import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Gallery from '../basic/Gallery';

const BakeliteTools = () => {

  const data = useStaticQuery(graphql`query{
    imagelist: allFile(filter: {relativeDirectory: {eq: "bakelit"}}, sort: {fields: name}) {
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
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('tools.t5')} | MJR ${t('title')}` : 'Alati za bakelit | MJR Alatnica'} defer={false}>
        <meta name='description' content='Između ostalog ovladali smo tehnologijom klasičnog pečenja bakelita. Ovim alatima se proizvode razni modeli bakelitnih WC daski i drugi predmeti.' />
      </Helmet>
      <h1 className='page-title'>{t('tools.t5')}</h1>
      <p className='text'>{t('tools.t5p1')}</p>
      <Gallery images={data.imagelist} />
    </div>
  );
}

export default BakeliteTools;
