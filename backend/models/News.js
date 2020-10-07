var mongoose = require("mongoose");
var Schema = mongoose.Schema

const NewsSchema = new Schema(
  {
    title: String,
    contents: String,
  },
  { versionKey: false }
);

var News = mongoose.model("News", NewsSchema);

module.exports = News