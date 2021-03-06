const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const auth = require("@feathersjs/authentication-client");

const socket = io("http://localhost:3030");
const app = feathers();

// Setup the transport (Rest, Socket, etc.) here
app.configure(socketio(socket));

// Available options are listed in the "Options" section
app.configure(auth());

// Receive real-time events through Socket.io
export default app;
