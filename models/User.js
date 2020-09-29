const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    accessType: {
        type: String,
        enum: ["admin", "student", "teacher"],
        required: true
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
