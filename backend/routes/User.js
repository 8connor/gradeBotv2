const express = require("express");
const routes = express.Router();
const jwtSecret = require("../jwtConfig");
const jwt = require("jsonwebtoken");
const passport = require("passport");

var db = require("../models");

// ============ Get =================

routes.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { accessType } = req.user[0];

    console.log(req.user);

    res.status(200).json({ authenticated: true, user: { username: accessType } });
  }
);

// ============ Post ================

routes.post("/login", (req, res, next) => {
  console.log("just hit the login");

  passport.authenticate("login", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      res.send(info.message);
    } else {
      req.logIn(user, (err) => {
        db.User.find({
          username: user[0].username,
        }).then(async (newestuser) => {
          const token = await jwt.sign({ id: newestuser[0].username }, jwtSecret.secret);

          await res.cookie("token", token, { httpOnly: true, sameSite: true });

          
          res.status(200).send({ authenticated: true });
        });
      });
    }
  })(req, res, next);
});

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
