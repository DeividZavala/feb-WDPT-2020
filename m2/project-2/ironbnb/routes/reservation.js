const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");
const { veryToken } = require("../utils/auth");

// Get all reservations by user
router.get("/", veryToken, (req, res) => {
  const { _id } = req.user;
  Reservation.find({ guest: _id })
    .populate({
      path: "property",
      populate: {
        path: "owner",
        select: "name",
      },
    })
    .then((reservations) => {
      res.status(200).json({ result: reservations });
    })
    .catch((err) => res.status(400).json(err));
});

// Get all reservations by property
router.get("/property/:property_id", veryToken, (req, res) => {
  const { property_id } = req.params;
  Reservation.find({ property: property_id })
    .populate("guest", "name")
    .populate("property", "title")
    .then((reservations) => {
      res.status(200).json({ result: reservations });
    })
    .catch((err) => res.status(400).json(err));
});

// Get details of reservation
router.get("/:id", veryToken, (req, res) => {
  const { id } = req.params;
  Reservation.findById(id)
    .populate({
      path: "property",
      populate: {
        path: "owner",
        select: "name profile_picture",
      },
    })
    .populate("guest", "name profile_picture")
    .then((reservation) => {
      res.status(200).json({ result: reservation });
    })
    .catch((err) => res.status(400).json(err));
});

// Create reservation
router.post("/", veryToken, (req, res) => {
  const { _id: guest } = req.user;
  const reservation = { ...req.body, guest };
  Reservation.create(reservation)
    .then((reservation) => {
      res.status(200).json({ result: reservation });
    })
    .catch((err) => res.status(400).json(err));
});

router.patch("/:id", veryToken, (req, res) => {
  const { id } = req.params;
  Reservation.findByIdAndUpdate(id, req.body, { new: true })
    .then((reservation) => {
      res.status(200).json({ result: reservation });
    })
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", veryToken, (req, res) => {
  const { id } = req.params;
  Reservation.findOneAndDelete(id)
    .then((reservation) => {
      res.status(200).json({ result: reservation });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
