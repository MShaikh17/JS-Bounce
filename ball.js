const canvas = document.getElementById("canvas");
const view = canvas.getContext("2d");

export class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const speed = 3;
    const angle = Math.random() * Math.PI * 2;

    this.dx = Math.cos(angle) * speed;
    this.dy = Math.sin(angle) * speed;

    this.radius = 10;
    this.color = this.getRandomColor();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    let WallHit = false;

    if (this.y + this.radius > canvas.height) {
      this.y = canvas.height - this.radius;
      this.dy = -this.dy;
    }

    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.dy = -this.dy;
    }

    if (this.x + this.radius > canvas.width) {
      this.x = canvas.width - this.radius;
      this.dx = -this.dx;
    }

    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.dx = -this.dx;
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
