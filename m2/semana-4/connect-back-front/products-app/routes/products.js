const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { veryToken, checkRole } = require("../utils/auth");

router.get("/", veryToken, checkRole(["ADMIN", "USER"]), (req, res) => {
  Product.find()
    .populate("seller", "email")
    .then((products) => {
      res.status(200).json({ result: products });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", veryToken, checkRole(["ADMIN"]), (req, res) => {
  const { _id } = req.user;
  Product.create({ ...req.body, seller: _id })
    .then((product) => {
      res.status(201).json({ result: product });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
