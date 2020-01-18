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

export const FIGHTER_2_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 4;

    // spawn a laser
    let laser1 = spawnProjectile(objects.BASIC_LASER, aShip);
    let laser2 = spawnProjectile(objects.BASIC_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser1.x += Math.cos(laser1.r) * 1.2;
      laser1.y += Math.sin(laser1.r) * 1.2;
      laser2.x -= Math.cos(laser2.r) * 1.2;
      laser2.y -= Math.sin(laser2.r) * 1.2;
    } else {
      aShip.weaponState = 0;
      laser1.x += Math.cos(laser1.r) * 3;
      laser1.y += Math.sin(laser1.r) * 3;
      laser2.x -= Math.cos(laser2.r) * 3;
      laser2.y -= Math.sin(laser2.r) * 3;

    }

    game.gameLoop.registerObject(laser1);
    game.gameLoop.registerObject(laser2);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.015)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const SKIRMISHER_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 5;

    // spawn a laser
    let laser = spawnProjectile(objects.SKIRMISHER_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 1.5;
      laser.y += Math.sin(laser.r) * 1.5;
    } else {
      aShip.weaponState = 0;
      laser.x -= Math.cos(laser.r) * 1.5;
      laser.y -= Math.sin(laser.r) * 1.5;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.02)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}

export const HEAVY_1_WEAPON = function(aShip, game) {
  if (aShip.weaponCooldown ==  0) {
    aShip.weaponCooldown = 30;

    // spawn a laser
    let laser = spawnProjectile(objects.HEAVY_LASER, aShip);

    if (aShip.weaponState == 0) {
      aShip.weaponState = 1;
      laser.x += Math.cos(laser.r) * 0;
      laser.y += Math.sin(laser.r) * 0;
    } else {
      aShip.weaponState = 0;

    }
    game.gameLoop.registerObject(laser);

    //  recoil
    aShip.push(aShip.r + aShip.offset, -0.3)

  } else if (aShip.weaponCooldown > 0) {
    aShip.weaponCooldown -= 1;
  }
}
