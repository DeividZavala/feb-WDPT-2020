const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");

router.get("/", (req, res) => {
  Order.find()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Order.findById(id)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  //req.body = { total: 232, item: [{ product: "id", quantity: 2 }] };
  const { _id: client } = req.user;
  const order = { ...req.body, client };
  Order.create(order)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json(err));
});
