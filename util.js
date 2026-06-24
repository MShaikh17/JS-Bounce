export class Util {
  static collision(b1, b2) {
    const distance = Math.hypot(b2.x - b1.x, b2.y - b1.y);

    if (distance - (b1.radius + b2.radius) <= 0) {
      console.log("Bang!");
    }
  }
}
