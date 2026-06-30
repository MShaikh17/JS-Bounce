export class Util {
  static collision(b1, b2) {
    if (!b1.active || !b2.active || b1.counter >0 || b2.counter >0) {
      return false;
    }
    const distance = Math.hypot(b2.x - b1.x, b2.y - b1.y);

    if (distance - (b1.radius + b2.radius) <= 0) {
      console.log("Bang!");
      b1.active = false;
      b2.active = false;
      return true;
    }
    return false;
  }
}
