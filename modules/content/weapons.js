import * as graphics from './shipGraphics.js';
import { Ship } from '../classes/Ship.js';
import { LASER_AI } from './ais.js';

import { BASIC_LASER } from './ships.js';

function spawnProjectile(aTemplate, aShip) {
  let returnObject = new Ship(aTemplate, aShip.team);

  returnObject.x = aShip.x;
  returnObject.y = aShip.y;
  returnObject.r = aShip.r;
  returnObject.Vx = aShip.Vx;
  returnObject.Vy = aShip.Vy;

  return returnObject;
}

export const FIGHTER_1_WEAPON = function(aShip, gameLoop) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 10;

    // spawn a laser
    let laser = spawnProjectile(BASIC_LASER, aShip);
    gameLoop.registerObject(laser);

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}
