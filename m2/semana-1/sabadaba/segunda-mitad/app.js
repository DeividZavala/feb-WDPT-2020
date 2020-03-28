const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});

app.listen(3000, () => {
  console.log("El servidor esta corriendo en el puerto 3000");
});
