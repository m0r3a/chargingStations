import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const greenMarkerIcon = {
  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', // URL for the green marker icon
};

const coordinates = [
  { lat: 47.053202, lng: 21.953436 }, // a)
  { lat: 47.057678, lng: 21.935992 }, // b)
  { lat: 47.060933, lng: 21.935820 }, // c)
  { lat: 47.057725, lng: 21.925525 }, // d)
  { lat: 47.071611, lng: 21.934314 }, // e)
  { lat: 47.055990, lng: 21.927073 }, // f)
  { lat: 47.050194, lng: 21.936919 }, // g)
  { lat: 47.043549, lng: 21.918839 }, // h)
  { lat: 47.066459, lng: 21.910708 }, // i)
  { lat: 47.038364, lng: 21.945214 }, // j)
  { lat: 47.045491, lng: 21.910738 }, // k)
  { lat: 47.055930, lng: 21.914548 }, // l)
  { lat: 47.031902, lng: 21.953819 }, // m)
  { lat: 47.069903, lng: 21.922025 }, // n)
  { lat: 47.053257, lng: 21.953225 }, // o)
  { lat: 47.034472, lng: 21.925186 }, // p)
];

const MapComponent = (props) => {
  const mapStyles = {
    height:'700px',
    width: '80%'
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
            icon={greenMarkerIcon} // Use the green marker icon
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: '', // Replace with your own Google Maps API key
})(MapComponent);
