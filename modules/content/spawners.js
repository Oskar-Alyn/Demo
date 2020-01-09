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

export const ENEMY_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 500,
  spawnTemplate: ships.FIGHTER_1,
  team: teams.RED,
  onlyEdges: true,
});

export const GOOD_SPAWNER = new Spawner({
  spawnType: 'Ships',
  frequency: 550,
  spawnTemplate: ships.FIGHTER_1,
  team: teams.BLUE,
  onlyEdges: false,
});
