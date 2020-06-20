const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");
const { veryToken } = require("../helpers/auth");

router.get("/", veryToken, (req, res) => {
  const { _id: client } = req.user;
  Order.find({ client })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", veryToken, (req, res) => {
  const { _id: client } = req.user;
  const { id } = req.params;
  Order.findOne({ _id: id, client })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", veryToken, (req, res) => {
  //req.body = { total: 232, item: [{ product: "id", quantity: 2 }] };
  const { _id: client } = req.user;
  const order = { ...req.body, client };
  Order.create(order)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
