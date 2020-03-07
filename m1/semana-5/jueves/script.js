const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let requestId;
let enemies = [];

class Mario {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image1 = new Image();
    this.image1.src = "https://bit.ly/2L7yH3f";
    this.image2 = new Image();
    this.image2.src = "https://bit.ly/2L3ikoe";
    this.image = this.image1;
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }

  draw() {
    if (this.y <= 212) this.y += 2;
    if (frames % 10 === 0) {
      this.image = this.image === this.image1 ? this.image2 : this.image1;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "https://art.pixilart.com/9f12f5c03f414cf.png";
  }

  gameOver() {
    ctx.font = "80px Avenir";
    ctx.fillText("Game Over", 250, 200);
  }

  draw() {
    this.x--;
    if (this.x < -canvas.width) this.x = 0;
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

class Enemy {
  constructor() {
    this.x = canvas.width;
    this.y = 232;
    this.width = 80;
    this.height = 80;
    this.image = new Image();
    this.image.src = "https://bit.ly/2BAISL4";
  }

  draw() {
    if (frames % 10) this.x -= 5;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

const mario = new Mario(0, 212, 80, 100);
const enemy = new Enemy();
const background = new Background();

function generateEnemies() {
  if (frames % 100 == 0 || frames % 60 == 0 || frames % 170 == 0) {
    const enemy = new Enemy();
    enemies = [...enemies, enemy];
  }
}

function drawingEnemies() {
  enemies.forEach(enemy => {
    enemy.draw();
    if (mario.collision(enemy)) {
      stop();
    }
  });
}

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  mario.draw();
  generateEnemies();
  drawingEnemies();

  if (requestId) {
    requestId = requestAnimationFrame(update);
  }
}

addEventListener("keydown", e => {
  if (e.keyCode === 32) {
    mario.y -= 50;
  }
  if (e.keyCode === 39) {
    mario.x += 20;
  }
  if (e.keyCode === 37) {
    mario.x -= 20;
  }
});

function start() {
  requestId = requestAnimationFrame(update);
}

function stop() {
  background.gameOver();
  requestId = undefined;
}

start();
