const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
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
      required: [true, "Debes agregar una contraseña"],
    },
    role: {
      type: String,
      default: "USER",
      enum: ["ADMIN", "USER"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
