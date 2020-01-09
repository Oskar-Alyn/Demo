import * as graphics from './shipGraphics.js';
import * as objects from './objects.js';
import { GameObject } from '../classes/GameObject.js';

function spawnProjectile(aTemplate, aShip) {
  let returnObject = new GameObject(aTemplate);

  returnObject.color = aShip.color;
  returnObject.x = aShip.x;
  returnObject.y = aShip.y;
  returnObject.r = aShip.r;
  returnObject.Vx = aShip.Vx;
  returnObject.Vy = aShip.Vy;

  return returnObject;
}

export const FIGHTER_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 10;

    // spawn a laser
    let laser = spawnProjectile(objects.BASIC_LASER, aShip);
    game.gameLoop.registerObject(laser);

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}
