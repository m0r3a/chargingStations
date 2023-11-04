// server2/index.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io-client");

const app = express();
const server = http.createServer(app);

const socket = socketIo(`https://600d-82-77-59-30.ngrok-free.app/`);

app.get("/", (req, res) => {
  res.send("Server 2 is running.");
});

socket.on("connect", () => {
  console.log("Connected to Server 1 from Server 2");
});

// Listen for the "message" event from Server 1
socket.on("status", (data) => {
  console.log(`Message from Server 1: ${JSON.stringify(data)}`);
});

const server2Port = 5000;
server.listen(server2Port, () => {
  console.log(`Server 2 is running on port ${server2Port}`);
});
