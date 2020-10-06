const Mongoose = require("mongoose");


const newsSchema = new Mongoose.Schema({
    message: String
}, {versionKey: false});


module.exports = Mongoose.model("News", newsSchema)