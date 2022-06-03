import React from 'react';
import ActionButton from '../layout/ActionButton';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import './ImageBox.css';

const ImageBox = ({ img, type, globe, title, button, buttonclick, children }) => {

    const image = getImage(img);

  return(
    <div className={`image-box ${type}`}>
    {globe ? <div className='image-box__globe' /> : <GatsbyImage image={image} alt='MJR Alatnica' objectFit='contain' layout='constrained' /> }
    <div className='image-box__container'>
      {title && <h3 className='image-box__title'>{title}</h3>}
      <p className='text'>{children}</p>
       {button && <ActionButton width='150px' click={buttonclick}>{button}</ActionButton>}
    </div>
    </div>
  );
}

export default ImageBox;
