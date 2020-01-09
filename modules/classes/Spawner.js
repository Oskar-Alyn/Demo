import { RN, rotateCoord } from '../mathExtention.js'
import { Ship } from './Ship.js';

export class Spawner {
  constructor (template, edgeDistance) {
    this.frequency = template.frequency;
    this.spawnTemplate = template.spawnTemplate;
    this.onlyEdges = template.onlyEdges;
    this.team = template.team;
    this.edgeDistance = edgeDistance;
  }

  run (gameLoop) {
    if (RN(0, this.frequency) == 0) {
      let spawn = new Ship(this.spawnTemplate, this.team)

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
        spawn.r = Math.atan(spawn.y / spawn.x);
        if (spawn.x < 0) { spawn.r += 3.14159 }
        spawn.r += 3.14159;
      } else {
        spawn.x = RN(-1 * this.edgeDistance, this.edgeDistance);
        spawn.y = RN(-1 * this.edgeDistance, this.edgeDistance);
        spawn.r = RN(0, 3141) / 100;
      }

      gameLoop.registerObject(spawn);
    }
  }
}
