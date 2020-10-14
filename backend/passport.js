const jwtSecret = require("./jwtConfig");
const bcrypt = require("bcrypt");
const db = require("./models");
const passport = require("passport"),
  localStrategy = require("passport-local").Strategy,
  JWTStrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    (username, password, done) => {
      try {
        db.User.find({
          username: username,
        }).then((user) => {
          if (user.length === 0) {
            bcrypt.hash(password, 12).then((hashedPassword) => {
              db.User.create({
                username: username,
                password: hashedPassword,
                accessType: "admin",
              }).then((user) => {
                console.log("user created");
                return done(null, user);
              });
            });
          }
          if (user[0].username === username) {
            return done(null, false, { message: "failed!" });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    (username, password, done) => {
      try {
        db.User.find({ username: username }).then((user) => {
          console.log("this is the passport login")
          if (user == undefined) {
            return done(null, false, { message: "bad username" });
          } else {
            bcrypt.compare(password, user[0].password).then((response) => {
              if (response != true) {
                console.log("incorrect password");
                return done(null, false, { message: "incorrect password!" });
              }
              console.log("user found");
              return done(null, user);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  "jwt",
  new JWTStrategy(opts, (jwt_payload, done) => {
    try {
      db.User.find({ username: jwt_payload.id }).then((user) => {
        if (user) {
          console.log("user found in db by passport");
          done(null, user);
        } else {
          console.log("user not found in db");
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
