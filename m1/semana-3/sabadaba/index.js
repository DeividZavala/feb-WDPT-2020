const numbers = [
  100,
  -10,
  0,
  0,
  -40,
  -10,
  -10,
  5,
  0,
  -10,
  -50,
  -10,
  0,
  0,
  -50,
  -10
];

/*const player1 = {
  name: "David",
  money: 1000,
  color: "red",
  position: 0,
  move: function() {
    console.log("ya estoy en otro lugar");
  }
};

const player2 = {
  name: "Carlos",
  money: 1000,
  color: "blue",
  position: 0,
  move: function() {
    console.log("ya estoy en otro lugar");
  }
};

const player3 = {
  name: "Josafat",
  money: 1000,
  color: "green",
  position: 0,
  move: function() {
    console.log("ya estoy en otro lugar");
  }
};*/

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.money = 1000;
    this.position = 0;
  }
  move() {
    const moves = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + moves) % numbers.length;
    this.money += numbers[this.position];
  }
}

function Player(name, color) {
  this.name = name;
  this.color = color;
  this.move = function() {};
}

const player1 = new Player("David", "red");
const player2 = new Player("Carlos", "blue");
const player3 = new Player("Josafat", "yellow");

player1.move();

console.log(player1);

class Animal {
  constructor(name, life, sound) {
    this.name = name;
    this.life = life;
    this.sound = sound;
  }

  scream() {
    console.log(this.sound);
  }
}

class Cat extends Animal {
  constructor(legs) {
    super("gatito", "15 años", "miaw");
    this.legs = legs;
  }
}

class Fish extends Animal {
  constructor(type) {
    super("el beta", "1 mes", "gluglu");
    this.water_type = type;
  }
}

const gatito = new Cat(4);
const elPezDorado = new Fish("salado");

console.log(elPezDorado.name);
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const r1 = new Rectangle(6, 7);

console.log(r1.calculatePerimeter());
console.log(r1.calculateArea());

const s1 = new Square(5);

console.log(s1.calculatePerimeter());
console.log(s1.calculateArea());
