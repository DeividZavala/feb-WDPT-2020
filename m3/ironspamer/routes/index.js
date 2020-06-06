var express = require("express");
var router = express.Router();
const { send } = require("../helpers/mailer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/spamer", (req, res) => {
  let options = { ...req.body };
  options.filename = "action";
  send(options).then(() => {
    res.status(200).json({ msg: "Spam enviado" });
  });
});

module.exports = router;
