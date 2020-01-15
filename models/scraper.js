const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");
console.log("scrapers model");
var scraperSchema = new Schema({
  fullName: {
    type: String,
    required: false,
    unique: false
  },
  name: {
    type: String,
    required: false
  },
  year: {
    type: String,
    required: false
  }

}, {
  timestamps: true
});

//scraperSchema.plugin(uniqueValidator);
const scraper = mongoose.model("scraper", scraperSchema);
module.exports = scraper;