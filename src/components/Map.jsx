import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import initialCoordinates from './initialCoordinates';
import List from './List';

const redMarkerIcon = {
  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL for the red marker icon
};

const greenMarkerIcon = {
  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', // URL for the green marker icon
};


const MapComponent = (props) => {
  const mapStyles = {
    height:'700px',
    width: '80%'
  };

  const [coordinates, setCoordinates] = useState(initialCoordinates);

  const toggleStatus = (index) => {
    const updatedCoordinates = [...coordinates];
    updatedCoordinates[index].status = coordinates[index].status === 'on' ? 'off' : 'on';
    setCoordinates(updatedCoordinates);
  };

  return (
    <div>
      <Map 
        id='center'
        google={props.google}
        zoom={14} // Set the initial zoom level to 13
        style={mapStyles}
        initialCenter={{
          lat: 47.0469, // Oradea city latitude
          lng: 21.9183, // Oradea city longitude
        }}
      >
        {coordinates.map((coord, index) => (
          <Marker
          key={index}
          position={coord}
          icon={coord.status === 'on' ? greenMarkerIcon : redMarkerIcon}
          onClick={() => toggleStatus(index)}
        />
        ))}
      </Map>
      <List coordinates={coordinates} toggleStatus={toggleStatus} />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: '', // Replace with your own Google Maps API key
})(MapComponent);
