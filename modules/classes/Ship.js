import { GameObject } from './GameObject.js';

export class Ship extends GameObject {
  constructor(template, team) {
    super(template.graphic, team.color, template.scale);

    this.team = team;

    // ship statistics
    this.speed = template.speed;
    this.rotationSpeed = template.rotationSpeed;

    this.weapon = template.weapon;
    this.weaponCooldown = 0;

    // control systems
    this.aiType = template.aiType;
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
    if (this.weapon !== null && this.useWeapon) {
      this.weapon(this, gameLoop);
    }
  }

  run(gameLoop) {
    if (typeof(this.aiType) == 'undefined') {
      console.log('No AI: ' + this);
    } else if (this.aiType !== null) {
      this.aiType.run(this);
    }
    this.weapons(gameLoop);
    this.move();
    super.run();
  }
}
