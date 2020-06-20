const { Router } = require("express");
const router = Router();
const Product = require("../models/Product");
const uploader = require("../helpers/multer");

router.get("/", (req, res) => {
  Product.find()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", uploader.array("images"), (req, res) => {
  const images = req.files.map((file) => file.path);
  const product = { ...req.body, images };
  Product.create(product)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
