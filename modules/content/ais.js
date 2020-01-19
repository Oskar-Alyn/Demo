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
    let targetAngle = angleTo(aShip.x, aShip.y, ai.aiTarget.x, ai.aiTarget.y) + Math.PI * 0.5;
    let angleOff = (targetAngle - aShip.r) % (Math.PI * 2);

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

    if (pythagorean(aShip.x, aShip.y, game.player.x, game.player.y) < 100) {
      aShip.push(targetAngle, 0.05);
    }


    if (pythagorean(aShip.x, aShip.y, game.player.x, game.player.y) < 1) {
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

  aShip.push(aShip.r + Math.PI * -0.5, 0.15);
};

export const PROJECTILE_AI_2 = function(aShip, ai, game) {
  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null) {
    let hitCircle=  ai.aiTarget.graphic.maxPoint * ai.aiTarget.scale;
    if (ai.targetDistance < hitCircle) {
      ai.aiTarget.shield -= 2;
      game.gameLoop.unregisterObject(aShip);
    }
  }

  aShip.push(aShip.r + Math.PI * -0.5, 0.15);
};

export const PROJECTILE_AI_3 = function(aShip, ai, game) {
  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null) {
    let hitCircle=  ai.aiTarget.graphic.maxPoint * ai.aiTarget.scale;
    if (ai.targetDistance < hitCircle) {
      ai.aiTarget.shield -= 7;
      game.gameLoop.unregisterObject(aShip);
    }
  }

  aShip.push(aShip.r + Math.PI * -0.5, 0.15);
};
