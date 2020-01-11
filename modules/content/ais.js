import { RN, angleTo, pythagorean } from '../mathExtention.js';

export const BASE_AI = function(aShip, ai, game) {
  aShip.turningLeft = true;
};

export const FIGHTER_AI = function(aShip, ai, game) {
  // defaults
  aShip.movingForward = false;
  aShip.turningRight = false;
  aShip.turningLeft = false;
  aShip.useWeapon = false;

  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null && ai.aiTarget.shield > 0) {
    // find angle to target
    let targetAngle = angleTo(aShip.x, aShip.y, ai.aiTarget.x, ai.aiTarget.y) + 3.14159 * 0.5;
    let angleOff = (targetAngle - aShip.r) % (3.1415 * 2);

    aShip.movingForward = true;
    aShip.useWeapon = (Math.abs(angleOff) * ai.targetDistance < 50);

    // turning decisions
    if (angleOff < -0.018) {
      aShip.turningLeft = true;
    } else if (angleOff > 0.018) {
      aShip.turningRight = true;
    } else {
      if (ai.targetDistance < 500) {
        aShip.movingForward = false;
        aShip.useWeapon = true;
      }
    }

  } else {
    // no target case
    ai.targetDistance = ai.detectionRange;

  }
};

export const COLLECTIBLE_AI = function(aShip, ai, game) {
  if (game.player.shield > 0) {
    let targetAngle = angleTo(aShip.x, aShip.y, game.player.x, game.player.y);

    if (pythagorean(aShip.x, aShip.y, game.player.x, game.player.y) > 1) {
      aShip.push(targetAngle, 0.05);
    } else {
      game.gameLoop.unregisterObject(aShip);
      game.state.playerCredits += 1;
    }
  }

  aShip.Vr = 0.02;
};

export const PROJECTILE_AI = function(aShip, ai, game) {
  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null) {
    let hitCircle=  ai.aiTarget.graphic.maxPoint * ai.aiTarget.scale;
    if (ai.targetDistance < hitCircle) {
      ai.aiTarget.shield -= 1;
      game.gameLoop.unregisterObject(aShip);
    }
  }

  aShip.push(aShip.r + 3.14159 * -0.5, 0.15);

  // TEMPORARY // FIX
  if (aShip.x > 1500 || aShip.x < -1500) {game.gameLoop.unregisterObject(aShip);}
  if (aShip.y > 1500 || aShip.y < -1500) {game.gameLoop.unregisterObject(aShip);}
};
