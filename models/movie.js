const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");
console.log("movies model");
var movieSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    unique: false
  },
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

movieSchema.plugin(uniqueValidator);
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;