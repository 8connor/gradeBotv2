const express = require("express");
const routes = express.Router();

var db = require("../../models");

routes.post("/register", (req, res) =>{
    var user = req.body

    // db.User.create(user).then(newUser => {

    //     res.json(newUser)
    // }).catch(err => console.log(err));

    res.json({
        hello: "world"
    })
});

routes.post("/createNews", (req, res) =>{
    let message = {
        title: req.body.title,
        contents: req.body.contents
    }

    db.News.create(message).then((data) =>{
        res.json(data)
    }).catch(err => console.log(err))
})


module.exports = routes;