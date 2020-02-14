const suma = function(a, b) {
  return a + b;
};

let perros = ["pitbull", "chihuahua", "gran danes", "pastor aleman"];

perros.push("husky", "perro");

console.log(perros);

perros.pop();

console.log("adios", perros);

perros.splice(3, 0, "aleman", "perrito");

console.log(perros);

perros.forEach(function(perro, index) {
  console.log(`Hola soy un ${perro} y tengo la pos ${index} en el array`);
});

let total = 0;
const products = [{ price: 30 }, { price: 20 }];

products.forEach(function(prod) {
  total += prod.price;
});

console.log(total);

const perrotes = perros.map(perro => perro.toUpperCase());

console.log(perrotes);

const total_final = products.reduce(function(total, prod) {
  return (total += prod.price);
}, 0);

console.log("total de carrito:", total_final);

console.log(suma(2, 5));

// function suma(a, b) {
//   return a + b;
// }

const name = "david";

function sayHi(name) {
  console.log(`Hola soy ${name}`);
}

sayHi(name);
