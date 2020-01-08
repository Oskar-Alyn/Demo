import { gameObject } from './gameObject.js';

export class ship extends gameObject {
  constructor(graphic, color, scale, speed, rotationSpeed, aiType, weapon) {
    super(graphic, color, scale);

    // ship statistics
    this.speed = speed;
    this.rotationSpeed = rotationSpeed;

    this.weapon = weapon;
    this.weaponCooldown = 0;

    // control systems
    this.aiType = aiType;
    this.movingForward = false;
    this.movingBackward = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.useWeapon = false;
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

  weapons(gameLoop) {
    if (this.useWeapon) {
      this.weapon(this, gameLoop);
    }
  }

  run(gameLoop) {
    this.aiType.run(this);
    this.weapons(gameLoop);
    this.move();
    super.run();
  }
}
