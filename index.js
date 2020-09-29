const PORT = 3001;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const routes = require("./routes")

mongoose.connect("mongodb://localhost:27017/gradeBotv2");

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, (req, res) => {
  console.log(`api route listening on port ${PORT}`);
});
