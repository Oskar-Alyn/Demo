import { RN, angleTo } from '../mathExtention.js';

export const BASE_AI = function(aShip, ai, game) {
  aShip.turningLeft = true;
};

export const FIGHTER_AI = function(aShip, ai, game) {
  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null && ai.aiTarget.shield > 0) {
    let targetAngle = angleTo(aShip.x, aShip.y, ai.aiTarget.x, ai.aiTarget.y) + 3.14159 * 0.5;

    let angleOff = (targetAngle - aShip.r) % (3.1415 * 2);

    if (angleOff < -0.018) {
      aShip.turningLeft = true;
      aShip.turningRight = false;
    } else if (angleOff > 0.018) {
      aShip.turningRight = true;
      aShip.turningLeft = false;
    } else {
      aShip.turningRight = false;
      aShip.turningLeft = false;
    }

    aShip.useWeapon = (ai.targetDistance < 1000);
    aShip.movingForward = true;

  } else {
    aShip.movingForward = false;
    aShip.turningRight = false;
    aShip.turningLeft = false;
    aShip.useWeapon = false;
    ai.targetDistance = ai.detectionRange;

  }
};

export const COLLECTIBLE_AI = function(aShip, ai, game) {
  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null) {
    let targetAngle = angleTo(aShip.x, aShip.y, ai.aiTarget.x, ai.aiTarget.y);

    if (ai.targetDistance > 1) {
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
    if (ai.targetDistance < ai.detectionRange) {
      ai.aiTarget.shield -= 1;
      game.gameLoop.unregisterObject(aShip);
    }
  }

  aShip.push(aShip.r + 3.14159 * -0.5, 0.15);

  // TEMPORARY // FIX
  if (aShip.x > 8000 || aShip.x < -8000) {game.gameLoop.unregisterObject(aShip);}
  if (aShip.y > 8000 || aShip.y < -8000) {game.gameLoop.unregisterObject(aShip);}
};
