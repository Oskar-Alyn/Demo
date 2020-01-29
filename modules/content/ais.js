import { RN, angleTo, pythagorean } from '../mathExtention.js';

export const BASE_AI = function(aShip, ai, game) {
  aShip.turningLeft = true;
  aShip.roll = 0;
};

export const SUN_AI = function(sun, ai, game) {
  for (let i = 0; i < sun.graphic.parts.length; i++) {
    let part = sun.graphic.parts[i];
    part.yaw += (((i % 2) * 2) - 1) / (4000 / (i + 10));
    part.roll -= (((i % 2) * 2) - 1) / (4000 / (i + 10));
  }
};

export const FIGHTER_AI = function(aShip, ai, game) {
  if (RN(0, 2) == 0) { // add reflex time
    // defaults
    aShip.movingForward = false;
    aShip.turningRight = false;
    aShip.turningLeft = false;
    aShip.useWeapon = false;

    if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null && ai.aiTarget.shield > 0) {
      // find angle to target
      let targetAngle = angleTo(aShip.x, aShip.y, ai.aiTarget.x, ai.aiTarget.y) + Math.PI * 0.5;
      let yaw = (aShip.yaw + (Math.PI * 2)) % (Math.PI * 2);

      let angleOff;
      let leftDistance = (yaw >= targetAngle ? yaw - targetAngle : (Math.PI * 2) - (targetAngle - yaw));
      let rightDistance = (targetAngle >= yaw ? targetAngle - yaw : (Math.PI * 2) - (yaw - targetAngle));
      if (leftDistance < rightDistance) {
        angleOff = leftDistance;
      } else {
        angleOff = rightDistance;
      }

      // firing decision
      if (Math.abs(angleOff * ai.targetDistance) < 20 + ai.aiTarget.graphic.maxPoint) {
        aShip.useWeapon = true;
      }

      // movement decisions
      aShip.movingForward = true;
      if (ai.targetDistance > 100) {
        if (RN(0, 2) == 2 && aShip.useWeapon == false) { // maybe focus on turning
          aShip.movingForward = false;
        }
      }
      if (ai.targetDistance < ai.aiTarget.graphic.maxPoint) {
        aShip.movingBackwards = true;
        aShip.movingForward = false;
      }

      // turning decisions
      if (Math.abs(angleOff * ai.targetDistance) > ai.aiTarget.graphic.maxPoint * 0.5 ) {
        if (leftDistance < rightDistance) {
          aShip.turningLeft = true;
        } else {
          aShip.turningRight = true;
        }
      }

    } else {
      // no target case, doesn't always reset because lasers can increase
      if (ai.targetDistance < ai.detectionRange) {ai.targetDistance = ai.detectionRange};

    }
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

export const PROJECTILE_AI = function(projectile, ai, game) {
  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null) {

    // nearby lasers pump up detection
    ai.aiTarget.behaviour.targetDistance += 100;

    // detect hits and do damage
    let hitCircle = ai.aiTarget.graphic.maxPoint * ai.aiTarget.scale;
    if (ai.targetDistance < hitCircle) {
      ai.aiTarget.shield -= projectile.damage;
      ai.aiTarget.color = '#FFFFFF'; // hit flash
      game.gameLoop.unregisterObject(projectile);
    }
  }

  // decay over time
  projectile.alpha -= 0.002;
  if (projectile.alpha <= 0.1) {
    game.gameLoop.unregisterObject(projectile);
  }

  projectile.push(projectile.yaw+ Math.PI * -0.5, 0.15);
};
