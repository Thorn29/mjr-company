import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Gallery from '../basic/Gallery';

const AluTools = () => {

  const data = useStaticQuery(graphql`query{
    imagelist: allFile(filter: {relativeDirectory: {eq: "aluminijum"}}, sort: {fields: name}) {
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
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('tools.t6')} | MJR ${t('title')}` : 'Alati za špricanje aluminijuma | MJR Alatnica'} defer={false}>
        <meta name='description' content='U mogućnosti smo da napravimo alate za livenje pod pritiskom (ubrizgavanjem u kokile), i klasičnim gravitacionim livenjem raznih oblika.' />
      </Helmet>
      <h1 className='page-title'>{t('tools.t6')}</h1>
      <p className='text'><Trans i18nKey='tools.t6p1' components={[<strong />]} /></p>
      <Gallery images={data.imagelist} />
    </div>
  );
}

export default AluTools;
