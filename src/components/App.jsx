import React, { useEffect, useState } from "react";
import MapComponent from "./Map";
import {io} from 'socket.io-client'

// const socket = socketIOClient('http://localhost:5000');



function App(){
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [socket, setSocket] = useState([]);

    // useEffect(() => {
    //   socket.on('data', (data) => {
    //     console.log(data);
    //     setData(data);
    //   });
    // }, []);

    // const sendMessage = () => {
    //   socket.emit('message', message);
    //   setMessage('');
    // };

    useEffect(()=>{
      const socket = io('http://localhost:5000')
      setSocket(socket);

      // socket.on('connect', ()=>console.log(socket.id))
      socket.on('data', (data)=>{
        console.log("success")
        setData(data)
      })

      return () => {
        socket.disconnect();
      }
    //  socket.on('time', (data)=>setTime(data))
    //  socket.on('disconnect',()=>setTime('server disconnected'))
   
   }, [])

    return(
        <>
        <h1>Charging stations Oradea</h1>
        <MapComponent data={data} socket={socket} />
        </>
    )
}

export default App;
