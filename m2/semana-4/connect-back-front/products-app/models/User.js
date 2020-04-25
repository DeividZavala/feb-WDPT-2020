const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Debes de agregar un email"],
    },
    password: {
      type: String,
      required: [true, "Debes de agregar un password"],
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
