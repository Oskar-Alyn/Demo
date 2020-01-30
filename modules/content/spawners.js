import { RN } from '../mathExtention.js';
import { Spawner } from '../classes/Spawner.js';
import * as ships from './ships.js';
import * as objects from './objects.js';
import * as teams from './teams.js';

export const FIELD_SPAWNER = {
  pattern: function( spawner ) {
    if (spawner.doSpawnCheck()) {
      let spawn = spawner.doSpawn();

      spawn.x = RN(-1 * this.edgeDistance, this.edgeDistance);
      spawn.y = RN(-1 * this.edgeDistance, this.edgeDistance);
      spawn.yaw = RN(0, 3141) / 100;
    }
  }
};

export const EDGE_SPAWNER = {
  pattern: function( spawner ) {
    if (spawner.doSpawnCheck()) {
      let spawn = spawner.doSpawn();

      // set to edges
      if (RN(0, 1) == 0) {
        spawn.x = RN(-1 * this.edgeDistance, this.edgeDistance);
        spawn.y = (RN(0, 1) * 2 - 1) * this.edgeDistance;
      } else {
        spawn.x = (RN(0, 1) * 2 - 1) * this.edgeDistance;
        spawn.y = RN(-1 * this.edgeDistance, this.edgeDistance);
      }

      spawn.yaw = angleTo(spawn.x, spawn.y, 0, 0); // point at center
    }
  }
};

export const POINT_SPAWNER = {
  pattern: function( spawner ) {
    if (spawner.doSpawnCheck()) {
      let spawn = spawner.doSpawn();

      spawn.x = spawner.y;
      spawn.y = spawner.x;
      spawn.yaw = spawner.yaw;
    }
  }
};
