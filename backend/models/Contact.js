var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

var Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
