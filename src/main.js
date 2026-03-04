import "./style.css";
import boom from "./boom.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 700;
let canvasPosition = canvas.getBoundingClientRect();

let boomImg = new Image();
boomImg.src = boom;

const explosions = [];

class Explosion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.spriteWidth = 200;
    this.spriteHeight = 179;
    this.width = this.spriteWidth / 2;
    this.height = this.spriteHeight / 2;
    this.Image = new Image();
    this.Image.src = boom;
    this.frame = 0;
    this.timer = 0;
  }
  update() {
    this.timer++;
    if (this.timer % 5 === 0) {
      this.frame++;
    }
    // this.frame++;
  }

  draw() {
    ctx.drawImage(
      this.Image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }
}

window.addEventListener("click", (e) => {
  let posX = e.x - canvasPosition.left;
  let posY = e.y - canvasPosition.top;

  explosions.push(new Explosion(posX, posY));

  console.log(explosions);
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  explosions.forEach((explosion) => {
    explosion.update();
    explosion.draw();
  });
  requestAnimationFrame(animate);
}

animate();
