const express = require("express");
const multer = require("multer");
const Movie = require("../models/Movie");
const router = express.Router();

// File Upload Configuration
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Render Admin Upload Page
router.get("/upload", (req, res) => {
  res.render("admin");
});

// Handle Movie Upload
router.post("/upload", upload.single("image"), async (req, res) => {
  const { title, category, tags } = req.body;
  const newMovie = new Movie({
    title,
    category,
    tags: tags.split(","),
    image: req.file.filename,
  });

  await newMovie.save();
  res.redirect("/admin/upload"); // Redirect back after upload
});

module.exports = router;
