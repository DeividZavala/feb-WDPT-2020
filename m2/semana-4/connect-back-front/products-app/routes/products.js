const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  console.log(req.cookies.token);
  const { id } = jwt.verify(req.cookies.token, process.env.SECRET);
  User.findById(id).then((user) => {
    console.log(user);
  });
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
