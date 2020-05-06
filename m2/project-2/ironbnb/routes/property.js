const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

router.get("/", (req, res) => {
  Property.find()
    .populate("owner", "name profile_picture")
    .then((properties) => {
      res.status(200).json({
        result: properties,
      });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  Property.create({ ...req.body })
    .then((property) => {
      res.status(201).json({ result: property });
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Property.findById(id)
    .populate("owner", "name profile_picture")
    .then((property) => {
      res.status(200).json({
        result: property,
      });
    })
    .catch((err) => res.status(400).json(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Property.findByIdAndUpdate(id, req.body, { new: true })
    .populate("owner", "name profile_picture")
    .then((property) => {
      res.status(200).json({
        result: property,
      });
    })
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Property.findByIdAndRemove(id)
    .then((property) => {
      res.status(200).json({
        result: property,
      });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
