import {
  pythagorean,
  rotateCoord,
  angleTo,
} from '../mathExtention.js';
import { PROJECTILE_AI } from '../content/ais.js';
import { PROJECTILE_AI_2 } from '../content/ais.js';
import { PROJECTILE_AI_3 } from '../content/ais.js';

export class EdgeBinder {
  constructor (edgeDistance) {
    this.edgeDistance = edgeDistance;
  }

  run (game) {
    for (let i = 0; i < game.gameLoop.objectsToRun.length; i++) {
      let obj = game.gameLoop.objectsToRun[i];
      if (typeof obj.x !== 'undefined') {

        // wrap
        let distance = pythagorean(obj.x, obj.y, 0, 0);
        if (distance > this.edgeDistance) {

          if (typeof obj.behaviour !== 'undefined' && obj.behaviour !== null) {
            if (obj.behaviour.aiFunction == PROJECTILE_AI || obj.behaviour.aiFunction == PROJECTILE_AI_2 || obj.behaviour.aiFunction == PROJECTILE_AI_3) {
              // destroy lasers
              if (distance > this.edgeDistance + 100) {
                game.gameLoop.unregisterObject(obj);
              }

            } else {
              // normal case
              let angle = angleTo(0, 0, obj.x, obj.y);
              let newCoord = rotateCoord([this.edgeDistance, 0, 0], angle);
              obj.x = newCoord[0];
              obj.y = newCoord[1];

            }
          }
        }
      }
    }
  }
}
