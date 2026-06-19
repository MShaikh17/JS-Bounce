import { Ball } from "./ball.js";

console.log("working");

const canvas = document.getElementById("canvas");
const view = canvas.getContext("2d");

// this is the radius of the ball.
const radius = 40;

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
const balls = [];
const numballs = 1000;
for (let i = 0; i < numballs; i++) {
  //this function generates a random rgb colour string for the ball when it hits a wall.
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);
  const ball = new Ball(x, y);
  balls.push(ball);
}
// this animates the ball to move around the canvas and bounce off walls.
function animate() {
  view.clearRect(0, 0, canvas.width, canvas.height);

  /* if (WallHit) {
    ballcolor = getRandomColor();
  }*/

  //this draws the ball on the canvas at its new position with the current colour.
  for (const ball of balls) {
    ball.update();
    ball.updateDraw();
  }
  requestAnimationFrame(animate);
}

animate();