const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;

const sprites = {
  running: {
    src: "./images/ezgif.com-gif-maker.png",
    width: 200,
    height: 200
  }
};

class Mario {
  constructor(x, y, width, height) {
    this.image = new Image();
    this.image.src = sprites.running.src;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sx = 0;
    this.sy = 0;
    this.sw = sprites.running.width;
    this.sh = sprites.running.height;
  }

  changeAction(action) {
    this.image.src = sprites[action].src;
    // TODO
    // change the sx,sy,sw,sh attributes
  }

  draw() {
    if (this.sx > 2200) this.sx = 0;
    ctx.drawImage(
      this.image,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.x,
      this.y,
      this.width,
      this.height
    );
    if (frames % 5 === 0) this.sx += 200;
  }
}

const mario = new Mario(0, 0, 100, 100);

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  mario.draw();
  requestAnimationFrame(update);
}

document.onkeydown = e => {
  if (e.keyCode === 32) {
    mario.changeAction("running");
  }
};

update();
