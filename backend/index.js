const path = require("path");
const PORT = 3300;
const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const passport = require("passport");
const bodyParser = require("body-parser")


//routes being brought in from different file. Recognizes index.js.
const { News, User, Contact } = require("./routes");

const signToken = (userID) => {
  // this will return the token
  // we shouldn't send sensitive information here
  return JWT.sign(
    {
      iss: "server", // who sent it
      sub: userID, // subject - who is it for
    },
    "server",
    { expiresIn: "1h" }
  );
  // when you sign you're creating this jwt token, this has to match with the secret key in passport config file
  // 5000 milliseconds
};

mongoose.connect(
  `mongodb://localhost:27017/gradeBotv2`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to Database");
  }
);

require("./config/passport");

// Cross origin requests.
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
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
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => console.log(`listening on ${PORT}`));
