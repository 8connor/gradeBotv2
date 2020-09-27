const express = require("express");
const PORT = 3001
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gradeBotv2");


app.use(express.json());


app.get("/api/here", (req, res)=>{

    res.json({
        new: "hello world"
    })
})

app.listen(PORT, (req, res) => {
    console.log(PORT)
})
