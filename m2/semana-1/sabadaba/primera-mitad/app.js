const chalk = require("chalk");
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(chalk.yellow(`petición desde ${request.url}`));

  if (request.url === "/") {
    response.write("Que onda morros");
    response.end();
  } else if (request.url === "/login") {
    response.write("estas en login");
    response.end();
  } else {
    response.write("404 page");
    response.end();
  }
});

server.listen(3000, () => {
  console.log(chalk.green("servidor corriendo en el puerto 3000"));
});

// console.log("que onda mijos, esto es nodejs");

// function sayHi(name) {
//   console.log(`${chalk.bgYellow("Hola")} como estas, ${chalk.red(name)}`);
// }

// sayHi("david");
// sayHi("foggy");
// sayHi("gladys");
// sayHi("karen");
