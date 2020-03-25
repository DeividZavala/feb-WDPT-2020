const perro = "panzer";
const agee = 9;

for (let i = 0; i < 10; i++) {}

const str = `El nombre de mi perro es ${perro} ${agee}`;
const str1 = "El nombre de mi perro es " + perro + " " + agee;

console.log(str.includes(perro));

let person = {
  name: "david",
  age: 22,
  city: "CDMX",
  color: "canela"
};

// ES6
const { name, age, ...newPerson } = person;

// ES5
//const name = person.name
//const age = person.age

console.log(name, age, newPerson);

const cart = [
  { name: "item 1", price: 30, quantity: 2, country: "germany" },
  { name: "item 2", price: 300, quantity: 1, country: "usa" },
  { name: "item 3", price: 26, quantity: 9 }
];

const total = cart.reduce((acc, item) => {
  const { price: p, quantity: q } = item;
  acc += p * q;
  return acc;
}, 0);

cart.forEach(item => {
  const { country = "mexico" } = item;
  console.log(country);
});

console.log(total);

const ptFeb = ["carlos", "ben", "gladys", "fanny", "karen", "josafat", "roy"];
const ptMar = ["pepe", "toño", "chucho", "sebas", "david"];
const [v1, , v2 = "gladys"] = ptFeb;

const ironhack = [...ptFeb, ...ptMar];

const pais = "mexico";

const david = { ...person, pais };

console.log(ironhack, david);
