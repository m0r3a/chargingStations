import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const redMarkerIcon = {
  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // URL for the red marker icon
};

const greenMarkerIcon = {
  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', // URL for the green marker icon
};

const initialCoordinates = [
  { lat: 47.053202, lng: 21.953436, status: 'off' }, // a)
  { lat: 47.057678, lng: 21.935992, status: 'off' }, // b)
  { lat: 47.060933, lng: 21.935820, status: 'off' }, // c)
  { lat: 47.057725, lng: 21.925525, status: 'on' }, // d)
  { lat: 47.071611, lng: 21.934314, status: 'on' }, // e)
  { lat: 47.055990, lng: 21.927073, status: 'on' }, // f)
  { lat: 47.050194, lng: 21.936919, status: 'off' }, // g)
  { lat: 47.043549, lng: 21.918839, status: 'off' }, // h)
  { lat: 47.066459, lng: 21.910708, status: 'on' }, // i)
  { lat: 47.038364, lng: 21.945214, status: 'off' }, // j)
  { lat: 47.045491, lng: 21.910738, status: 'on' }, // k)
  { lat: 47.055930, lng: 21.914548, status: 'on' }, // l)
  { lat: 47.031902, lng: 21.953819, status: 'off' }, // m)
  { lat: 47.069903, lng: 21.922025, status: 'off' }, // n)
  { lat: 47.053257, lng: 21.953225, status: 'off' }, // o)
  { lat: 47.034472, lng: 21.925186, status: 'off' }, // p)
];

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
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: '', // Replace with your own Google Maps API key
})(MapComponent);
