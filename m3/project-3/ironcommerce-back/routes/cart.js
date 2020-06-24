const { Router } = require("express");
const router = Router();
const { veryToken } = require("../helpers/auth");
const Cart = require("../models/Cart");

router.get("/", veryToken, (req, res) => {
  const { _id: client } = req.user;
  Cart.findOne({ client })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  const { _id: client } = req.user;
  const changes = { ...req.body };
  const items = Cart.find({ client }).count();
  const action = items > 0 ? Cart.findOneAndUpdate : Cart.create;
  const args = items > 0 ? [{ client }, changes, { new: true }] : [changes];
  action(...args)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.delete("/", (req, res) => {
  const { _id: client } = req.user;
  Cart.findOneAndRemove({ client })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});
