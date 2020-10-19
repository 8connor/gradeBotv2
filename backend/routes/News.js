const express = require("express");
const routes = express.Router();

var db = require("../models");
// ============ Get ================

routes.get("/news", (req, res) => {
  db.News.find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// ============ Post ================

routes.post("/createNews", (req, res) => {
  let message = {
    title: req.body.title,
    contents: req.body.contents,
  };

  db.News.create(message)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

module.exports = routes;
