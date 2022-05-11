
const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    name: {
      type: String,      
      unique: true
    },
    occupation: {
      type: String,
      unique: true
    },
    catchPhrase: {
      type: String,
      unique: true
    }
  },
);

module.exports = model("Celebrity", celebritySchema);