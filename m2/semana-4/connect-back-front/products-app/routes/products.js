const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json({ result: products });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.status(201).json({ result: product });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
