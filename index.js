console.log("working");

const canvas = document.getElementById("canvas");
const view = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  view.strokeStyle = "red";
  view.fillStyle = "red";
  view.lineWidth = 2;
  view.fill();
}
resize();

window.addEventListener("resize", resize);
let dx = 5;
let dy = 5;
let x = 100;
let y = 100;

function animate() {
  view.clearRect(0, 0, canvas.width, canvas.height);
  x += dx;
  y += dy;
  if (y + 40 > canvas.height || y < 40) {
    dy = -dy;
  }
  if (x + 40 > canvas.width || x < 40) {
    dx = -dx;
  }
  view.beginPath();
  view.arc(x, y, 40, 0, Math.PI * 2);
  view.fill();
  requestAnimationFrame(animate);
}

animate();
