import React from 'react';
import { navigate } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ImageBox from '../basic/ImageBox';
import ProductLinks from '../basic/ProductLinks';

const Products = () => {

  const data = useStaticQuery(graphql`query{
    img1: file(relativePath: { eq: "basic/products1.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 390
            placeholder: BLURRED
          )
          }
        }
    img2: file(relativePath: { eq: "basic/products2.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 390
            placeholder: BLURRED
          )
          }
       }
    img3: file(relativePath: { eq: "basic/airguide.png" }) {
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
      <Helmet title={t('title') === 'Alatnica' || t('title') === 'Company' ? `${t('products.title')} | MJR ${t('title')}` : 'Proizvodi | MJR Alatnica'} defer={false}>
        <meta name='description' content='MJR Alatnica proizvodi isključivo po narudžbi. Ukoliko vas interesuje gruba podela proizvoda i alata sa kojima smo radili tokom godina, to možete pronaći ovde.' />
      </Helmet>
      <h1 className='page-title'>{t('products.title')}</h1>
      <ImageBox img={data.img1} type='right png'>
        <Trans i18nKey='products.p1' components={[<strong />]} />
      </ImageBox>
      <ImageBox img={data.img2} type='png'>
        <Trans i18nKey='products.p2' components={[<strong />, <br />]} />
      </ImageBox>
      <ProductLinks />
      <ImageBox img={data.img3} type='png' button={t('products.b1')} buttonclick={() => navigate('/usmerivac_vazduha')}>
        <Trans i18nKey='products.p3' components={[<strong />]} />
      </ImageBox>
      <p className='text'><Trans i18nKey='products.p4' components={[<strong />]} /></p>
    </div>
  );
}

export default Products;
