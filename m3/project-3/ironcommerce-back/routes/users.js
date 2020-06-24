const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.post("/signup", (req, res) => {
  const { password, ...userValues } = req.body;
  bcrypt.hash(password, 10).then((hashedPass) => {
    const user = { ...userValues, password: hashedPass };
    User.create(user)
      .then(() => {
        res.status(200).json({ message: "Usuario creado con éxito" });
      })
      .catch((err) => res.status(400).json(err));
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Correo o contraseña no enviados" });

  User.findOne({ email }).then((user) => {
    if (user === null)
      return res.status(404).json({ message: "Usuario no registrado" });

    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        const userObject = user.toObject();
        const { password, ...userWithoutPass } = userObject;
        const token = jwt.sign({ id: user._id }, process.env.SECRET, {
          expiresIn: "1d",
        });
        return res
          .cookie("token", token, {
            expires: new Date(Date.now() + 86400000),
            secure: false,
            httpOnly: true,
          })
          .json({ user: userWithoutPass });
      }
      return res.status(400).json({ message: "Contraseña incorrecta" });
    });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "logout" });
});

module.exports = router;
