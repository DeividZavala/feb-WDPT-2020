const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "purple";
ctx.fillRect(100, 25, 100, 100);

ctx.clearRect(125, 50, 50, 50);
ctx.strokeRect(137, 63, 25, 25);

ctx.fillStyle = "red";
ctx.font = "30px Arial";
ctx.fillText("Ay wey, salio", 20, 20, 100);

//borramos el canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// dibujamos la imagen

const image = new Image();
image.src =
  "https://c4.wallpaperflare.com/wallpaper/535/638/527/street-fighter-backgrounds-sunset-res-clouds-fight-area-asian-tiger-wallpaper-preview.jpg";

image.onload = function() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

const character = new Image();

character.src =
  "https://i.pinimg.com/originals/8e/bb/02/8ebb021259d8d541aeec28347dd47025.png";

character.onload = function() {
  ctx.drawImage(character, 240, 65, 50, 90);
};
