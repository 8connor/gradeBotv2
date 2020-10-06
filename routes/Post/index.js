const express = require("express");
const routes = express.Router();

var db = require("../../models");

routes.post("/register", (req, res) =>{
    var user = req.body

    // db.User.create(user).then(newUser => {

    //     res.json(newUser)
    // });

    res.json({
        hello: "world"
    })
});


module.exports = routes;