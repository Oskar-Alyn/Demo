import { Weapon } from '../classes/Weapon.js';
import * as patterns from './weaponPatterns.js';
import * as projectiles from './projectiles.js';

import { Projectile } from '../classes/Projectile.js';
import { rotateCoord } from '../mathExtention.js';

function spawnProjectile(aTemplate, aShip) {
  let returnObject = new Projectile(aTemplate);

  returnObject.color = aShip.color;
  returnObject.x = aShip.x;
  returnObject.y = aShip.y;
  returnObject.r = aShip.r;
  returnObject.Vx = aShip.Vx;
  returnObject.Vy = aShip.Vy;

  return returnObject;
}

export const FIGHTER_1_WEAPON = {
  cooldownTime: 5,
  pattern: patterns.staggered,
  spread: [0.8, -0.8],
  projectile: projectiles.BASIC_LASER,
  recoil: 0.012,
};

export const FIGHTER_2_WEAPON = {
  cooldownTime: 4,
  pattern: patterns.pairs,
  spread: [1.2, 3],
  projectile: projectiles.BASIC_LASER,
  recoil: 0.015,
};

export const SKIRMISHER_1_WEAPON = {
  cooldownTime: 5,
  pattern: patterns.staggered,
  spread: [1.5, -1.5],
  projectile: projectiles.SKIRMISHER_LASER,
  recoil: 0.02,
}

export const HEAVY_1_WEAPON = {
  cooldownTime: 30,
  pattern: patterns.staggered,
  spread: [0],
  projectile: projectiles.HEAVY_LASER,
  recoil: 0.03,
};

export const FIRE_1_WEAPON = {
  cooldownTime: 4,
  pattern: patterns.staggered,
  spread: [0.6, -0.6],
  projectile: projectiles.FIRE_BLAST,
  recoil: 0.01,
};

export const ACID_1_WEAPON = {
  cooldownTime: 3,
  pattern: patterns.pairs,
  spread: [1.2, 3],
  projectile: projectiles.ACID_BLAST,
  recoil: 0.015,
};

export const LIGHTNING_1_WEAPON = {
  cooldownTime: 5,
  pattern: patterns.staggered,
  spread: [0],
  projectile: projectiles.LIGHTNING_BLAST,
  recoil: 0.01,
};

export const TALON_1_WEAPON = {
  cooldownTime: 10,
  pattern: patterns.staggered,
  spread: [1.8, -1.8],
  projectile: projectiles.TALON_BLAST,
  recoil: 0.01,
};
