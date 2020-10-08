const express = require("express");
const routes = express.Router();

var db = require("../models");

routes.post("/sendContact", (req, res) => {
  let message = {
    email: req.body.email,
    title: req.body.title,
    contents: req.body.contents,
  };

  db.Contact.create(message)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

module.exports = routes;