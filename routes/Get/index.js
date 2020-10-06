const express = require("express");
const routes = express.Router();

var db = require("../../models");

routes.get("/news", (res, req) => {
    db.News.find({}).then((data)=>{
        res.json(data);
    });
});

routes.get("/test", (req, res) => {    
    console.log("hit route")
    res.json({hello: "hello world"});
});

module.exports = routes