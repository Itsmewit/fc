const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  category: String,
  tags: [String],
  image: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Movie", MovieSchema);
