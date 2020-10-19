const path = require("path");
const PORT = 3300;
const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");


//routes being brought in from different file. Recognizes index.js.
const { News, User, Contact } = require("./routes");


mongoose.connect(
  `mongodb://localhost:27017/gradeBotv2`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to Database");
  }
);

require("./passport");

// Cross origin requests.
app.use(cors());
// This middleware package gets the cookies of the requests sent to the server.
app.use(cookieParser());
// Initialize passport.
app.use(passport.initialize());
app.use(express.json());

//api routes for our api calls.
app.use("/api", News);
app.use("/api", User);
app.use("/api", Contact);

// If none of the routes are hit it sends the static web page.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// Creating a server for use with socket io.
const server = http.createServer(app);
// Defining socket.io
const io = require("socket.io")(server);

// When you connect it will listen for a chat message. if you message in the chat it will emit that message.
// TODO: this is just sitting here for testing purposes. This will be moved to a different folder eventually.
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

// This sets the server to listen on the port defined at the top.
server.listen(PORT, () => console.log(`listening on ${PORT}`));
