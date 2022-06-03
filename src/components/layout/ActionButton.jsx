import React from 'react';
import './ActionButton.css';

const ActionButton = ({ width, click, children }) => {
  return(
    <button onClick={click} className='action-button' style={{ width: width }}>
      {children}
    </button>
  );
}

export default ActionButton;
