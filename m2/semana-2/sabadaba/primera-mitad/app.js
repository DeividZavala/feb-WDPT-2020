const mongoose = require("mongoose");
const Perro = require("./models/Perro");
const Cat = require("./models/Cat");

mongoose
  .connect("mongodb://localhost/mongoose-test", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

function createPerro(name) {
  Perro.create({ name })
    .then((newPerro) =>
      console.log(`Un nuevo perro se añadio: ${newPerro.name}`)
    )
    .catch((err) => console.error(`Error al crear nuevo perro: ${err}`));
}

function searchPerros(query = {}) {
  Perro.find(query).then((perros) => {
    console.log(perros);
  });
}

function createCat(name, age) {
  Cat.create({ name, age })
    .then((newCat) => console.log(`Un nuevo gato se añadio: ${newCat.name}`))
    .catch((err) => console.error(`Error al crear nuevo gato: ${err}`));
}

function getAnimals() {
  const promise1 = Perro.find(); // 3s
  const promise2 = Cat.find(); // .5s

  Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
  });
}

createCat("mishi", 2);
