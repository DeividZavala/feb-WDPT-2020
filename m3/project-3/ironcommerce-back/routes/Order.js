const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");
const { veryToken } = require("../helpers/auth");
const { emailSender } = require("../helpers/mailer");

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
  const { _id: client, email } = req.user;
  const order = { ...req.body, client };
  Order.create(order)
    .then(async (result) => {
      const populated = await Order.populate(result, {
        path: "items",
        populate: {
          path: "product",
          select: "title price",
        },
      });
      const order = populated.toObject();
      const options = {
        filename: "billing",
        email,
        message: "Thanks for your order",
        subject: "Recipe",
        ...order,
      };
      await emailSender(options);
      res.status(200).json({ populated });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
