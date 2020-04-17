const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/restaurants", (req, res) => {
  Restaurant.find()
    .then((restaurants) => {
      res.status(200).json({ restaurants });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/restaurants", (req, res) => {
  Restaurant.create(req.body)
    .then((restaurant) => {
      res.status(201).json({ restaurant });
    })
    .catch((err) => res.status(400).json(err));
});

router.patch("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  Restaurant.findByIdAndUpdate(id, req.body, { new: true })
    .then((restaurant) => {
      res.json({ restaurant });
    })
    .catch((err) => res.status(400).json(err));
});

router.delete("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  Restaurant.findByIdAndRemove(id).then((restaurant) => {
    res.json({ restaurant });
  });
});

module.exports = router;
