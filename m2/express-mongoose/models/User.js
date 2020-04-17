const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    validate: {
      message: "El nombre de usuario ya existe",
      validator: async (username) => {
        const items = await mongoose.models["User"].count({ username });
        return items < 1;
      },
    },
  },
  email: {
    type: String,
    validate: {
      message: "El email ya esta en uso",
      validator: async (email) => {
        const items = await mongoose.models["User"].count({ email });
        return items < 1;
      },
    },
  },
});

module.exports = mongoose.model("User", userSchema);
