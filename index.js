import { Ball } from "./ball.js";
import { Util } from "./util.js";
import {Triangle} from "./triangle.js";

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

const triangle = new Triangle();

const balls = [];
const numballs = 2;
for (let i = 0; i < numballs; i++) {
  //this function generates a random rgb colour string for the ball when it hits a wall.
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);
  const ball = new Ball(x, y, 40);
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
    // Util.collision(balls[0], balls[1]);
  }

 /* for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      if (Util.collision(balls[i], balls[j])) {
        const b1 = balls[i];
        const b2 = balls[j];
        if (b1.radius > 10) {
          balls.push(new Ball(b1.x, b1.y, b1.radius / 2));
          balls.push(new Ball(b1.x, b1.y, b1.radius / 2));
        }
        if (b2.radius > 10) {
          balls.push(new Ball(b2.x, b2.y, b2.radius / 2));
          balls.push(new Ball(b2.x, b2.y, b2.radius / 2));
        }
      }
    }
  } */


  triangle.updateDraw();

  for (const ball of balls) {
    ball.updateDraw();
  }
  requestAnimationFrame(animate);
}

animate();
