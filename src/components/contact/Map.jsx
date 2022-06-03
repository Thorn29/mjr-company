import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MapsAPI from '../../MapsAPI';

const containerStyle = {
  width: '90%',
  height: '250px',
  margin: '0 auto'
};

const center = { lat: 45.05372, lng: 20.07806 };

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={MapsAPI}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={{ lat: 45.05372, lng: 20.07806 }} />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);
