const PORT = 3001;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//routes being brought in from different file. Recognizes index.js.
const routes = require("./routes");

mongoose.connect(
  `mongodb+srv://herokuUser:ABJoMLkYCEZasN6k@cluster0.beusi.mongodb.net/`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to Database");
  }
);

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, (req, res) => {
  console.log(`api route listening on port ${PORT}`);
});
