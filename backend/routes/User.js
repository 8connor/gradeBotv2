const express = require("express");
const routes = express.Router();

var db = require("../models");

// ============ Get =================

routes.get("/test", (req, res) => {
  res.json({ hello: "hello world" });
});

// ============ Post ================

routes.post("/register", (req, res) => {
  var user = req.body;

  // db.User.create(user).then(newUser => {

  //     res.json(newUser)
  // }).catch(err => console.log(err));

  res.json({
    hello: "world",
  });
});

module.exports = routes;
