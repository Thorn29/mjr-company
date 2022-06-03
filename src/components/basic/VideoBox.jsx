import React from 'react';
import { Trans } from 'react-i18next';
import './VideoBox.css';

const VideoBox = ({ textcode, children}) => {

  return(
    <div className="video-box">
      <div className="video-box__video">
        {children}
      </div>
      <p className='text'><Trans i18nKey={textcode} components={[<strong />]} /></p>
    </div>
  );
}

export default VideoBox;
