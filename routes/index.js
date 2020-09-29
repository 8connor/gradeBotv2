const path = require("path")
const express = require("express");
const routes = express.Router();

var db = require("../models");

routes.get("test", (req, res) => {
    res.json({hello: "hello world"});
})

module.exports = routes;