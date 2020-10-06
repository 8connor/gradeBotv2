const PORT = 3001;
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

app.use(express.json());

app.use("/api", routes.Get);
app.use("/api", routes.Post);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
})

app.listen(PORT, (req, res) => {
  console.log(`api route listening on port ${PORT}`);
});
