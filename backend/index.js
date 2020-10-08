const path = require("path");
const PORT = 3300;
const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//routes being brought in from different file. Recognizes index.js.
const routes = require("./routes");

mongoose.connect(
  `mongodb://localhost:27017/gradeBotv2`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to Database");
  }
);

app.use(cors());
app.use(express.json());

app.use("/api", routes.News);
app.use("/api", routes.User);
app.use("/api", routes.Contact);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

const server = http.createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => console.log(`listening on ${PORT}`));
