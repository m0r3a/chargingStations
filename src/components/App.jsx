import React, { useEffect, useState } from "react";
import MapComponent from "./Map";
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:8080');

function App(){
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
      socket.on('data', (data) => {
        setData(data);
      });
    }, []);

    // const sendMessage = () => {
    //   socket.emit('message', message);
    //   setMessage('');
    // };

    return(
        <>
        <h1>Charging station Oradea</h1>
        <MapComponent />
        </>
    )
}

export default App;
