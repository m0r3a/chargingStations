import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import initialCoordinates from './initialCoordinates';
import List from './List';

const redMarkerIcon = {
  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // URL for the red marker icon
};

const greenMarkerIcon = {
  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png", // URL for the green marker icon
};
const yellowMarkerIcon = {
  url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png", // URL for the green marker icon
};


const getIcon = (status) => {
  switch (status) {
    case "free":
      return greenMarkerIcon;
    case "used":
      return yellowMarkerIcon;
    case "error":
      return redMarkerIcon;
    default:
      return greenMarkerIcon;
  }
}

const toggleIcon = (status) => {
  switch (status) {
    case "free":
      return "used";
    case "used":
      return "error";
    case "error":
      return "free";
    default:
      return "free";
  }
}

const MapComponent = (props) => {
  const mapStyles = {
    height: "95%",
    width: "80%",
    marginTop: "22px",
    marginLeft: "200px",
  };

  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    setCoordinates(props.data)
  }, [props.data])

  const toggleStatus = (index) => {
    const updatedCoordinates = [...coordinates];
    updatedCoordinates[index].status = toggleIcon(coordinates[index].status);
    setCoordinates(updatedCoordinates);
    
    props.socket.emit("message", { id: coordinates[index].id, status: coordinates[index].status})
  };

  return (
    <div>
      <Map
        id="center"
        google={props.google}
        zoom={14} // Set the initial zoom level to 13
        style={mapStyles}
        initialCenter={{
          lat: 47.053, // Oradea city latitude
          lng: 21.9282, // Oradea city longitude
        }}
      >
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            position={coord}
            icon={getIcon(coord.status)}
            onClick={() => toggleStatus(index)}
          />
        ))}
      </Map>
      <List coordinates={coordinates} toggleStatus={toggleStatus} />
    </div>
  );
};




export default GoogleApiWrapper({
  apiKey: "", // Replace with your own Google Maps API key
})(MapComponent);
