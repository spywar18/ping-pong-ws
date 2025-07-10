"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the WebSocketServer class from the "ws" library
const ws_1 = require("ws");
// Create a new WebSocket server instance on port 8000
const wss = new ws_1.WebSocketServer({ port: 8000 });
// Add an event listener for new client connections
wss.on("connection", function (socket) {
    // Add an event listener for messages received from the connected client
    socket.on("message", (e) => {
        // Check if the message received is "ping"
        if (e.toString() === "ping") {
            // Respond with "pong" to the client
            socket.send("pong");
        }
    });
});
