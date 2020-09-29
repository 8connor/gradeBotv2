const path = require("path");
const express = require("express");
const routes = express.Router();

var db = require("../models");

// =================get===================

routes.get("/test", (req, res) => {    
    res.json({hello: "hello world"});
});

// =================post==================

routes.post("/register", (req, res) =>{
    var user = req.body

    db.User.create(user).then(newUser => {

        res.json(newUser)
    });
});

module.exports = routes;