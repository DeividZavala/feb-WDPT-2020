const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const button = document.querySelector("button");
let frames = 0;
const gravity = 0.1;
let pipes = [];
let requestId;
let points = 0;
const audio = new Audio();
audio.src = "https://patrickdearteaga.com/audio/Battleship.ogg?_=27";
audio.loop = true;

ctx.font = "30px Avenir";

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "./images/bg.png";
  }

  draw() {
    if (this.x < -canvas.width) this.x = 0;
    this.x--;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x + canvas.width,
      this.y,
      this.width,
      this.height
    );
  }
}

class Flappy {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.vy = 2;
    this.userPull = 0;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "./images/flappy.png";
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }

  rise() {
    this.y -= 30;
  }

  draw() {
    this.vy = this.vy + (gravity - this.userPull);
    if (this.y + this.height < canvas.height) {
      this.y += this.vy;
    } else {
      gameOver();
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class Pipe {
  constructor(pos, y, height) {
    this.x = canvas.width;
    this.y = y;
    this.width = 30;
    this.height = height;
    this.image = new Image();
    this.image.src =
      pos === "top"
        ? "./images/obstacle_top.png"
        : "./images/obstacle_bottom.png";
  }

  draw() {
    this.x -= 2;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

const background = new Background();
const flappy = new Flappy(20, 40, 30, 30);

function generatePipes() {
  if (!(frames % 120 === 0)) return;

  const height = Math.floor(Math.random() * (canvas.height * 0.6)) + 30;
  const pipe1 = new Pipe("top", 0, height);
  const pipe2 = new Pipe(undefined, height + 120, canvas.height - 120 - height);
  pipes = [...pipes, pipe1, pipe2];
}

function drawPipes() {
  pipes.forEach((pipe, index) => {
    if (pipe.x < -30) {
      points += 0.5;
      return pipes.splice(index, 1);
    }
    pipe.draw();
    if (flappy.collision(pipe)) {
      requestId = undefined;
    }
  });
}

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  generatePipes();
  background.draw();
  flappy.draw();
  drawPipes();
  ctx.fillText(points, 650, 40);
  if (!requestId) gameOver();
  if (requestId) {
    requestId = requestAnimationFrame(update);
  }
}

function start() {
  button.disabled = true;
  audio.play();
  requestId = requestAnimationFrame(update);
}

function gameOver() {
  audio.pause();
  button.disabled = false;
  button.onclick = restart;
  requestId = undefined;
  ctx.fillText("Game Over", 200, 200);
}

function restart() {
  pipes = [];
  flappy.y = 40;
  audio.currentTime = 0;
  start();
}

document.onkeydown = function(e) {
  if (e.keyCode === 82) {
    restart();
  }
  if (e.keyCode == 32) {
    flappy.userPull = 0.3;
  }
};

document.onkeyup = function(e) {
  if (e.keyCode == 32) {
    flappy.userPull = 0;
  }
};

button.onclick = start;
