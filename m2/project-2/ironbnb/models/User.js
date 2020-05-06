const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Debes agregar un nombre"],
    },
    email: {
      type: String,
      required: [true, "Debes agregar un email"],
      validate: {
        message: "El email ya esta en uso",
        validator: async (email) => {
          const items = await mongoose.models["User"].count({ email });
          return items < 1;
        },
      },
    },
    password: {
      type: String,
      required: [true, "Debes agregar un contraseña"],
    },
    profile_picture: {
      type: String,
      required: [true, "Debes agregar una imagen de perfil"],
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
