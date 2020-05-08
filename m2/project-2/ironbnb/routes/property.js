const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const { veryToken } = require("../utils/auth");

router.get("/", veryToken, (req, res) => {
  Property.find()
    .populate("owner", "name profile_picture")
    .then((properties) => {
      res.status(200).json({
        result: properties,
      });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", veryToken, (req, res) => {
  const { _id: owner } = req.user;
  Property.create({ ...req.body, owner })
    .then((property) => {
      res.status(201).json({ result: property });
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", veryToken, (req, res) => {
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

router.patch("/:id", veryToken, (req, res) => {
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

router.delete("/:id", veryToken, (req, res) => {
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
