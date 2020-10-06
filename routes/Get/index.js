const express = require("express");
const routes = express.Router();

var db = require("../../models");

routes.get("/news", (res, req) => {
    console.log("hit route")
    db.News.find({}).then((data)=>{
        res.json(data);
    });
});

routes.get("/test", (req, res) => {    
    res.json({hello: "hello world"});
});

module.exports = routes