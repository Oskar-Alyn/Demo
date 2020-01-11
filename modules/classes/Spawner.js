import { RN, rotateCoord, angleTo } from '../mathExtention.js'
import { Ship } from './Ship.js';
import { GameObject } from './GameObject.js';

export class Spawner {
  constructor (template, edgeDistance, team) {
    this.frequency = template.frequency;
    this.frequencyNormalizer = 0;

    this.spawnType = template.spawnType;
    this.spawnTemplate = template.spawnTemplate;
    this.team = team;

    this.onlyEdges = template.onlyEdges;
    this.edgeDistance = edgeDistance;
  }

  run (game) {
    if (RN(0, this.frequency - this.frequencyNormalizer) == 0) {
      this.frequencyNormalizer = 0;
      let spawn;

      if (this.spawnType == 'Ships') {
        spawn = new Ship(this.spawnTemplate, this.team);
      } else {
        spawn = new GameObject(this.spawnTemplate);
      }

      spawn.r = RN(0, 3141) / 100;
      if (this.onlyEdges) {
        if (RN(0, 1) == 0) {
          spawn.x = RN(-1 * this.edgeDistance, this.edgeDistance);
          spawn.y = (RN(0, 1) * 2 - 1) * this.edgeDistance;
        } else {
          spawn.x = (RN(0, 1) * 2 - 1) * this.edgeDistance;
          spawn.y = RN(-1 * this.edgeDistance, this.edgeDistance);
        }

        // move to align with grid
        let location = rotateCoord([spawn.x, spawn.y, 0], (3.1415 / 4));
        spawn.x = location[0];
        spawn.y = location[1];

        // point at center
        spawn.r = angleTo(spawn.x, spawn.y, 0, 0);

      } else {
        spawn.x = RN(-1 * this.edgeDistance, this.edgeDistance);
        spawn.y = RN(-1 * this.edgeDistance, this.edgeDistance);
        spawn.r = RN(0, 3141) / 100;

        // move to align with grid
        let location = rotateCoord([spawn.x, spawn.y, 0], (3.1415 / 4));
        spawn.x = location[0];
        spawn.y = location[1];
      }

      game.gameLoop.registerObject(spawn);
    } else {
      this.frequencyNormalizer += 1;
    }
  }
}
