const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

// Fetch all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort({ createdAt: -1 });
  res.json(movies);
});

// Search movies by tags
router.get("/search", async (req, res) => {
  const query = req.query.q;
  const movies = await Movie.find({ tags: { $regex: query, $options: "i" } });
  res.json(movies);
});

module.exports = router;
