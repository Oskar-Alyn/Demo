import { GameObject } from './GameObject.js';
import { Ai } from './Ai.js';
import { Weapon } from './Weapon.js';

export class Ship extends GameObject {
  constructor(template, team) {
    super({
      graphic: template.graphic,
      color: team.color,
      scale: template.scale,
      behaviour: template.aiType,
    });

    this.team = team;

    // ship statistics
    this.speed = template.speed;
    this.rotationSpeed = template.rotationSpeed;

    this.shield = template.shieldMax;
    this.shieldMax = template.shieldMax;
    this.shieldRegen = template.shieldRegen;
    this.shieldRecharge = 0;

    this.drop = template.drop;

    this.weapon = (typeof template.weapon == 'undefined' ? null : new Weapon( template.weapon ));

    // control systems
    this.movingForward = false;
    this.movingBackward = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.useWeapon = false;

    // model detail
    this.offset = Math.PI * -0.5;
  }

  // returns a functional rotation value
  getR () {
    return (this.r + this.offset);
  }

  // moves the ship according to behaviour and stats
  move() {
    if (this.movingForward) {
      this.push(this.getR(), this.speed)
    }
    if (this.movingBackward) {
      this.push(this.getR(), -0.5 * this.speed)
      this.Vr *= 0.4;
    }
    if (this.turningLeft) {
      this.Vr -= this.rotationSpeed;;
    }
    if (this.turningRight) {
      this.Vr += this.rotationSpeed;;
    }
  }

  // runs weapons if they exist
  weapons(game) {
    if (this.weapon !== null && this.useWeapon) {
      this.weapon.firing(this, game);
    }
  }

  // runs shield regen mechanic
  chargeShield() {
    if (this.shield < this.shieldMax ) {
      if (this.shieldRecharge <= 0) {
        this.shieldRecharge = this.shieldRegen;
        this.shield += 1;
      } else {
        this.shieldRecharge -= 1;
      }
    } else {
      this.shieldRecharge = 60;
    }
  }

  // does death and loot behaviour
  deathCheck(game) {
    if (this.shield <= 0) {
      game.gameLoop.unregisterObject(this);

      if (this.team != game.player.team) {
        let drop = new GameObject(this.drop);
        drop.x = this.x;
        drop.y = this.y;
        game.gameLoop.registerObject(drop);
      }
    }
  }

  run(game) {
    this.color = this.team.color;
    this.alpha = 0.2 + 0.8 * (this.shield / this.shieldMax);

    this.chargeShield();
    this.weapons(game);
    this.move();

    super.run(game);

    this.deathCheck(game); // needs to be last, may unregister ship
  }
}
