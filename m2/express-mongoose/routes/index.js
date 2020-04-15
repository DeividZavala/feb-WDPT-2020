const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/restaurants", (req, res) => {
  Restaurant.find().then((restaurants) => {
    res.status(200).json({ restaurants });
  });
});

router.post("/restaurants", (req, res) => {
  Restaurant.create(req.body)
    .then((restaurant) => {
      res.status(201).json({ restaurant });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
