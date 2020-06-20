const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.veryToken = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) return res.status(401).json(error);
    User.findById(decoded.id).then((user) => {
      req.user = user;
      next();
    });
  });
};
