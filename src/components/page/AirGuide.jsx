import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ImageBox from '../basic/ImageBox';
import VideoBox from '../basic/VideoBox';

const AirGuide = () => {

  const data = useStaticQuery(graphql`query{
  img1: file(relativePath: { eq: "basic/airguide.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 390
          placeholder: BLURRED
        )
        }
      }
  img2: file(relativePath: { eq: "basic/acboxes.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 390
          placeholder: BLURRED
        )
        }
      }
  img3: file(relativePath: { eq: "basic/acbox.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 390
          placeholder: BLURRED
        )
        }
      }
  imagelist: allFile(filter: {relativeDirectory: {eq: "musterije"}}) {
      nodes {
        id
        childImageSharp {
        fixed {
          src
          width
        }
      }
      }
      }
      }`);

  const { t, i18n } = useTranslation();

  return(
    <div className='container'>
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('aguide.title')} | MJR ${t('title')}` : 'Usmerivač vazduha | MJR Alatnica'} defer={false}>
        <meta name='description' content='Usmerivač vazduha predstavlja revolucionarno rešenje za problem direktnog hladnog vazduha iz klima uređaja. Lako se montira, odgovara svim klima uređajima, estetski je prijatan i pre svega pristupačan.' />
      </Helmet>
      <h1 className='page-title'>{t('aguide.title')}</h1>
      <ImageBox img={data.img1}><Trans i18nKey='aguide.p1' components={[<strong />]} /></ImageBox>
      <p className='text'><Trans i18nKey='aguide.p2' components={[<strong />]} /></p>
      <div className='tiles'>
        <VideoBox textcode='aguide.p3'><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1625002787589037%2Fvideos%2F1668841046538544%2F&show_text=0&width=560" title="MJR usmerivač vazduha" style={{border:'none', overflow:'hidden'}}  scrolling="no" frameBorder="0" allowFullScreen={true}></iframe></VideoBox>
        <ImageBox type='top' img={data.img2}><Trans i18nKey='aguide.p4' components={[<strong />]} /></ImageBox>
      </div>
      <ImageBox type='right' img={data.img3}>
        {/* Done this way to avoid warnings, can be done easier and still work */}
        <Trans i18nKey='aguide.p5' components={[<strong />, <br/>, <Link />]} />
        <br/>
        {t('aguide.p5t')} <a href='https://www.facebook.com/Usmeriva%C4%8D-vazduha-klime-1625002787589037/' target='_blank' rel='noopener noreferrer'>{t('aguide.p5a')}</a>
        <br/>
        {i18n.language === 'sr' && <>3. Možete poručiti preko <a href='https://www.bcgroup-online.com/dodaci-za-klima-uredjaje/klimaresenje-usmerivac-vazduha-klime-47777' target='_blank' rel='noopener noreferrer'>bc groupa</a></>}
      </ImageBox>
      <p className='text'>{t('aguide.p6')}</p>
      <div className='tiles'>
        {data.imagelist.nodes.map(node => <img key={node.id} src={node.childImageSharp.fixed.src} alt='whatever' className='tile-img' />)}
      </div>
    </div>
  );
}

export default AirGuide;
