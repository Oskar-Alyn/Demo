import { Projectile } from '../classes/Projectile.js';

export class Weapon {
  constructor( template ) {
    this.cooldown = 0;
    this.cooldownTime = template.cooldownTime;
    this.state = 0;

    this.spread = template.spread;
    this.pattern = template.pattern;

    this.projectile = template.projectile;
    this.recoil = template.recoil;
  }

  spawnProjectile(ship) {
    let returnObject = new Projectile(this.projectile);

    returnObject.color = ship.color;
    returnObject.x = ship.x;
    returnObject.y = ship.y;
    returnObject.r = ship.r;
    returnObject.Vx = ship.Vx;
    returnObject.Vy = ship.Vy;

    return returnObject;
  }

  firing(ship, game) {
    if (this.cooldown <= 0) {
      this.cooldown = this.cooldownTime

      // fire weapon
      this.pattern(this, ship, game);
      //  recoil
      ship.push(ship.r + ship.offset, -1 * this.recoil)

    } else {
      this.cooldown -= 1;
    }
  }
}
