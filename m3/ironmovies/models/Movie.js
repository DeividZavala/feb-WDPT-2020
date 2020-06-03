const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Debes mandar un titulo"],
    },
    genre: {
      type: String,
      required: [true, "Debes agregar que genero es"],
    },
    images: [String],
  },
  { timestamps: true }
);

module.exports = model("Movie", movieSchema);
