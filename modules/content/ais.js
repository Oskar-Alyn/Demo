import { angleTo } from '../mathExtention.js';

export const BASE_AI = function(aShip, ai, game) {
  aShip.turningLeft = true;
};

export const FIGHTER_AI = function(aShip, ai, game) {
  aShip.movingForward = true;
};

export const COLLECTIBLE_AI = function(aShip, ai, game) {
  if (typeof ai.aiTarget !== 'undefined' && ai.aiTarget !== null) {
    let targetAngle = angleTo(aShip.x, aShip.y, ai.aiTarget.x, ai.aiTarget.y);

    if (ai.targetDistance > 10) {
      aShip.Vx += Math.cos(targetAngle) * 0.5;;
      aShip.Vy += Math.sin(targetAngle) * 0.5;;
    } else {
      game.gameLoop.unregisterObject(aShip);
      game.state.playerCredits += 1;
    }
  }

  aShip.Vr = 0.02;
};
