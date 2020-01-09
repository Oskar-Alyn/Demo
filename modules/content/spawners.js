import { Spawner } from '../classes/Spawner.js';
import * as ships from './ships.js';
import * as teams from './teams.js';

export const CREDIT_SPAWNER = new Spawner({
  frequency: 100,
  spawnTemplate: ships.FIGHTER_1,
  team: teams.RED,
  onlyEdges: true,
});
