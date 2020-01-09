import { GameObject } from './GameObject.js';
import { Ai } from './Ai.js';

export class Ship extends GameObject {
  constructor(template, team) {
    super({
      graphic: template.graphic,
      color: team.color,
      scale: template.scale,
      behaviour: new Ai(template.aiType),
    });

    this.team = team;

    // ship statistics
    this.speed = template.speed;
    this.rotationSpeed = template.rotationSpeed;

    this.weapon = template.weapon;
    this.weaponCooldown = 0;

    // control systems
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

  run(game) {
    this.weapons(game);
    this.move();
    super.run(game);
  }
}
