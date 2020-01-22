import { Spawner } from '../classes/Spawner.js';
import * as ships from './ships.js';
import * as objects from './objects.js';
import * as teams from './teams.js';

export const FIELD_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 300,
  onlyEdges: false,
});

export const EDGE_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 500,
  onlyEdges: true,
});

export const RARE_EDGE_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 4000,
  onlyEdges: true,
});
