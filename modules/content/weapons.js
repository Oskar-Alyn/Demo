import * as graphics from './shipGraphics.js';
import * as objects from './objects.js';
import { GameObject } from '../classes/GameObject.js';
import { rotateCoord } from '../mathExtention.js';

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
    aShip.weaponCooldown = 5;

    // spawn a laser
    let laser = spawnProjectile(objects.BASIC_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 0.8;
      laser.y += Math.sin(laser.r) * 0.8;
    } else {
      aShip.weaponState = 0;
      laser.x -= Math.cos(laser.r) * 0.8;
      laser.y -= Math.sin(laser.r) * 0.8;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.012)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}
