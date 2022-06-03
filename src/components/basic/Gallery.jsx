import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

const Gallery = ({ images }) => {

  const { t } = useTranslation();
  const [slide, setSlide] = useState(0);


  const slideNext = () => {
    if (slide === images.nodes.length - 1) return setSlide(0);
    else return setSlide(slide => slide + 1);
  }

  const slidePrev = () => {
    if (slide === 0) return setSlide(images.nodes.length - 1);
    else return setSlide(slide => slide - 1);
  }

  return(
    <div className='gallery'>
      <div className='gallery__preview'>
        <div className='gallery__window'>
            <GatsbyImage image={images.nodes[slide].childImageSharp.gatsbyImageData} alt={`MJR Alatnica ${images.nodes[slide].name}`}/>
        </div>
      </div>
      <p className='gallery__desc'>{t(`prodlist.${images.nodes[slide].name}`)}</p>
      <div className='gallery__buttons'>
        <button className='gallery__button' onClick={slidePrev}>&#10094;</button>
        <button className='gallery__button' onClick={slideNext}>&#10095;</button>
      </div>
    </div>
  );
}

export default Gallery;
