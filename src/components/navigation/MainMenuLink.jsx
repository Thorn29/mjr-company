import React from 'react';
import { Link } from 'gatsby';
import './MainMenuLink.css';

const MainMenuLink = ({ url, children }) => {
  return(
      <Link to={url} className='main-menu-link' activeClassName='active'>
        {children}
      </Link>
  );
}

export default MainMenuLink;
