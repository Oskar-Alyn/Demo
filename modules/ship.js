import { gameObject } from './gameObject.js';

export class ship extends gameObject {
  constructor(graphic, color, scale, speed, rotationSpeed, aiType) {
    super(graphic, color, scale);

    // ship statistics
    this.speed = speed;
    this.rotationSpeed = rotationSpeed;

    // control systems
    this.aiType = aiType;
    this.movingForward = false;
    this.movingBackward = false;
    this.turningLeft = false;
    this.turningRight = false;
  }

  move() {
    if (this.movingForward) {
      this.Vx += Math.cos(this.r) * this.speed;;
      this.Vy += Math.sin(this.r) * this.speed;;
    }
    if (this.movingBackward) {
      this.Vx -= Math.cos(this.r) * this.speed;;
      this.Vy -= Math.sin(this.r) * this.speed;;
    }
    if (this.turningLeft) {
      this.Vr -= this.rotationSpeed;;
    }
    if (this.turningRight) {
      this.Vr += this.rotationSpeed;;
    }
  }

  run() {
    this.aiType.run(this);
    this.move();
    super.run();
  }
}
