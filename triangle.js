const canvas = document.getElementById("canvas");
const view = canvas.getContext("2d");

export class Triangle {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radiusfactor = 20;
  }
  get radius() {
    return canvas.height / this.radiusfactor;
  }
  updateDraw() {
    //if (!this.active) return;
    view.beginPath();
    view.fillStyle = "white";
    view.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    view.fill();
  }
}
