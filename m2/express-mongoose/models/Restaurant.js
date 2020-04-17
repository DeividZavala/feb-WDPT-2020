const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: {
      message: "El restaurante ya existe",
      validator: async (name) => {
        const items = await mongoose.models["Restaurant"].count({ name });
        return items < 1;
      },
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Debes agregar un propietario"],
  },
  address: {
    type: String,
    required: [true, "Tienes que agregar una dirección"],
  },
  capacity: {
    type: Number,
    min: [10, "La capacidad minima requerida es de 10 personas"],
    required: true,
  },
  rate: {
    type: Number,
    min: 0,
    max: 5,
  },
  description: {
    type: String,
    minlength: 50,
    maxlength: 140,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
