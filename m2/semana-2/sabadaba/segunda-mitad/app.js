const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const User = require("./models/User");

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hola, estas en mi home");
});

// Route params
app.get("/users/:username", (req, res) => {
  res.json(req.params);
  //const { username } = req.params;
  //User.find({ username });
});

// /david/56 ==> username = david
// /carlos ==> username = carlos

// /users?minAge=30&maxAge=65&role=ADMIN

function sayHi(req, res, next) {
  console.log("Hola amigo");
  next();
}

app.get("/users", sayHi, (req, res) => {
  console.log("Hola Amigo 2");
  res.json(req.query);
});

app.post("/users", (req, res) => {
  console.log(
    `Usuario: ${req.body.username} con password: ${req.body.password}`
  );
  res.json(req.body);
});

app.listen(3000, () => {
  console.log(`App corriendo en el puerto 3000`);
});
