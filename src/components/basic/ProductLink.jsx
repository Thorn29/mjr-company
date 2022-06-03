import React from 'react';
import { Link } from 'gatsby';
import HammerIcon from '../../icons/hammer.svg';
import './ProductLink.css';

const ProductLink = ({ url, image, children }) => {
  return(
    <Link to={url} className='product-link'>
    <div className='product-link__imagebox' style={{ backgroundImage: `url(${image})`}} />
      <div className='product-link__desc'>
        <HammerIcon className='product-link__icon' />
        <p className='product-link__text'>{children}</p>
      </div>
    </Link>
  );
}

export default ProductLink;
