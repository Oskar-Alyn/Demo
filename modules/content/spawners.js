import { Spawner } from '../classes/Spawner.js';
import * as ships from './ships.js';
import * as objects from './objects.js';
import * as teams from './teams.js';

export const CREDIT_SPAWNER = new Spawner({
  spawnType: 'Objects',
  frequency: 200,
  spawnTemplate: objects.CREDIT,
  onlyEdges: false,
});

export const FIGHTER_1_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 500,
  spawnTemplate: ships.FIGHTER_1,
  onlyEdges: true,
});

export const FIGHTER_2_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 3000,
  spawnTemplate: ships.FIGHTER_2,
  onlyEdges: false,
});

export const SKIRMISHER_1_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 800,
  spawnTemplate: ships.SKIRMISHER_1,
  onlyEdges: false,
});

export const HEAVY_1_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 3000,
  spawnTemplate: ships.HEAVY_1,
  onlyEdges: false,
});
