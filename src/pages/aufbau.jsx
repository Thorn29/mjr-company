import React from 'react';
import Background from '../images/basic/background.jpg';
import Aufbau from '../components/page/Aufbau';


const styles = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const ImAufbau = () => <div style={styles}><Aufbau /></div>;

export default ImAufbau;
