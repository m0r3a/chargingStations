// server2/index.js
const express = require("express");
const http = require("http");
const cors = require('cors');
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);

// const socket = socketIo(`https://600d-82-77-59-30.ngrok-free.app/`);

// Enable CORS for all routes

// server 1 => server 2
/* app.get("/", (req, res) => {
  res.send("Server 2 is running.");
});

socket.on("connect", () => {
  console.log("Connected to Server 1 from Server 2");
}); */

// Listen for the "message" event from Server 1
// socket.on("status", (data) => {
//   console.log(`Message from Server 1: ${JSON.stringify(data)}`);
// });

// socket.on("data", (data) => {
//   console.log(`Message from Server 1: ${JSON.stringify(data)}`);
// });


// ! send data sever 2 => react client
const io = socketIo(server,{ 
  cors: {
    origin: 'http://localhost:3000'
  }
}) //in case server and client run on different urls


io.on('connection', (socket) => {
  console.log("Client connected to Server 1");

  io.emit("data", initialData)

  // Emit a message to all clients every 5 seconds
  messageInterval()
});

const messageInterval = () => {
  setInterval(() => {
    initialData = changeStatusRandomly(initialData);
    io.emit("data", initialData);
    console.log("data modified")
  }, 10000);
}

const changeStatusRandomly = (data) => {
  // Generate a random index within the array's length
  const randomIndex = Math.floor(Math.random() * data.length);

  // Access the randomly selected element
  const randomElement = data[randomIndex];

  // const statuses = ["on", "off"];
  // const randomStatusIdx = Math.floor(Math.random() * 2);

  randomElement.status = randomElement.status === "off" ? "on" : "off";
  console.log("modified status of idx ", randomIndex)

  return data;
}




const server2Port = 5000;
server.listen(server2Port, () => {
  console.log(`Server 2 is running on port ${server2Port}`);
});


let initialData = [
  { id: 1, lat: 47.053202, lng: 21.953436, status: 'off' },
  { id: 2, lat: 47.057678, lng: 21.935992, status: 'off' },
  { id: 3, lat: 47.060933, lng: 21.935820, status: 'off' },
  { id: 4, lat: 47.057725, lng: 21.925525, status: 'on' },
  { id: 5, lat: 47.071611, lng: 21.934314, status: 'on' },
  { id: 6, lat: 47.055990, lng: 21.927073, status: 'on' },
  { id: 7, lat: 47.050194, lng: 21.936919, status: 'off' },
  { id: 8, lat: 47.043549, lng: 21.918839, status: 'off' },
  { id: 9, lat: 47.066459, lng: 21.910708, status: 'on' },
  { id: 10, lat: 47.038364, lng: 21.945214, status: 'off' },
  { id: 11, lat: 47.045491, lng: 21.910738, status: 'on' },
  { id: 12, lat: 47.055930, lng: 21.914548, status: 'on' },
  { id: 13, lat: 47.031902, lng: 21.953819, status: 'off' },
  { id: 14, lat: 47.069903, lng: 21.922025, status: 'off' },
  { id: 15, lat: 47.053257, lng: 21.953225, status: 'off' },
  { id: 16, lat: 47.034472, lng: 21.925186, status: 'off' },
];