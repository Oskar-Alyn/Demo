import * as graphics from './shipGraphics.js';
import { ship } from './ship.js';
import { LASER_AI } from './ais.js';
import { ai } from './ai.js';

export const FIGHTER_1_WEAPON = function(aShip, gameLoop) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 10;

    let laser = new ship(graphics.basic_laser, aShip.color, 1, 2, 0, new ai(LASER_AI), null);
    laser.x = aShip.x;
    laser.y = aShip.y;
    laser.r = aShip.r;
    laser.Vx = aShip.Vx;
    laser.Vy = aShip.Vy;
    gameLoop.registerObject(laser);

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}
