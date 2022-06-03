import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ImageBox from '../basic/ImageBox';
import VideoBox from '../basic/VideoBox';
import Gallery from '../basic/Gallery';

const PlasticTools = () => {

  const data = useStaticQuery(graphql`query{
    imagelist: allFile(filter: {relativeDirectory: {eq: "plastika"}}, sort: {fields: name}) {
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
  img1: file(relativePath: { eq: "basic/dotspod.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 390
          placeholder: BLURRED
        )
        }
      }
      }`);

  const { t } = useTranslation();

  return(
    <div className='container'>
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('tools.t1')} | MJR ${t('title')}` : 'Alati za plastiku | MJR Alatnica'} defer={false}>
        <meta name='description' content='Izrađujemo alate za plastične proizvode, kako za masovnu tako i za pojedinačnu proizvodnju. Neki od naših alata su proizveli preko 30 miliona primeraka proizvoda i još uvek proizvode besprekornim kvalitetom.' />
      </Helmet>
      <h1 className='page-title'>{t('tools.t1')}</h1>
      <p className='text'><Trans i18nKey='tools.t1p1' components={[<strong />, <br />]} /></p>
      <Gallery images={data.imagelist} />
      <div className='tiles'>
      <VideoBox textcode='tools.t1p3'><iframe title='MJR brizganje plastike' src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F168222363228172%2Fvideos%2F1909663062417418%2F&show_text=0&width=560" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen={true}></iframe></VideoBox>
      <ImageBox type='top' img={data.img1}><Trans i18nKey='tools.t1p2' components={[<strong />]} /></ImageBox>
      </div>
    </div>
  );
}

export default PlasticTools;
