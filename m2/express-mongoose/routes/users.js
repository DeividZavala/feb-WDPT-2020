const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET users listing. */
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((err) => res.status(400).json(err));
});

//  /users/
// /users/:id

// GET /restaurants
// POST /restaurants
// PATCH /restaurants/:id
// DELETE /restaurants/:id

module.exports = router;
