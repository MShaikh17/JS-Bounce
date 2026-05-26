console.log("working");

const canvas = document.getElementById("canvas");
const view = canvas.getContext("2d");
const radius = 40;

let ballcolour = getRandomColor();

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

function getRandomColor() {
  return `rgb(
  {Math.floor(Math.random() * 256)},
  {Math.floor(Math.random() * 256)},
  {Math.floor(Math.random() * 256)},
  )';`;
}

function animate() {
  view.clearRect(0, 0, canvas.width, canvas.height);
  x += dx;
  y += dy;

  let WallHit = false;

  if (y + radius > canvas.height || y - radius < 40) {
    dy = -dy;
    WallHit = true;
  }
  if (x + radius > canvas.width || x - radius < 40) {
    dx = -dx;
    WallHit = true;
  }

  if (WallHit) {
    ballcolor = getRandomColor();
  }

  view.beginPath();
  view.arc(x, y, radius, 0, Math.PI * 2);
  view.fillStyle = ballcolor();
  view.arc(x, y, radius, 0, Math.PI * 2);
  view.fill();
  requestAnimationFrame(animate);
}

animate();
