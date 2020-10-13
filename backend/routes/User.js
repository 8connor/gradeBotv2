const express = require("express");
const routes = express.Router();
const passport = require("passport");

var db = require("../models");

// ============ Get =================

routes.get("/test", (req, res) => {
  res.json({ hello: "hello world" });
});

// ============ Post ================

routes.post("/register", (req, res, next) => {
  passport.authenticate("register", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      req.logIn(user, (err) => {
        db.User.create(user).then((user) => {
          res.status(200).send({ message: "user created!" });
        });
      });
    }
  })(req, res, next);
});

module.exports = routes;
