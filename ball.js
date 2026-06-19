const canvas = document.getElementById("canvas");
const view = canvas.getContext("2d");

export class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    const maxSpeed = 10;
    this.dx = Math.random() * maxSpeed - maxSpeed / 2;
    this.dy = Math.random() * maxSpeed - maxSpeed / 2;
    this.radius = 5;
    this.color = this.getRandomColor();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    let WallHit = false;

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
      WallHit = true;
    }

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
      WallHit = true;
    }
  }

  updateDraw() {
    view.beginPath();
    view.fillStyle = this.color;
    view.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    view.fill();
  }

  getRandomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)} )`;
  }
}