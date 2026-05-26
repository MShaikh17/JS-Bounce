console.log("working");

const canvas = document.getElementById("canvas");
const view = canvas.getContext("2d");

// this is the radius of the ball.
const radius = 40;

let ballcolor = getRandomColor();

// This resizes the canvas to fit the window and set stroke and fill styles for the ball.
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  view.strokeStyle = "red";
  view.fillStyle = "red";
  view.lineWidth = 2;
  view.fill();
}
resize();

//this is the event listener for resizing the window
//It calls the resize function to adjust the canvas size and styles accordingly.
window.addEventListener("resize", resize);
let dx = 5;
let dy = 5;
let x = 100;
let y = 100;

//this function generates a random rgb colour string for the ball when it hits a wall.
function getRandomColor() {
  return `rgb(
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)} )`;
}

// this animates the ball to move around the canvas and bounce off walls.
function animate() {
  view.clearRect(0, 0, canvas.width, canvas.height);
  x += dx;
  y += dy;

  let WallHit = false;

  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
    WallHit = true;
  }

  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
    WallHit = true;
  }

  if (WallHit) {
    ballcolor = getRandomColor();
  }

  //this draws the ball on the canvas at its new position with the current colour.
  view.beginPath();
  view.fillStyle = ballcolor;
  view.arc(x, y, radius, 0, Math.PI * 2);
  view.fill();
  requestAnimationFrame(animate);
}

animate();
