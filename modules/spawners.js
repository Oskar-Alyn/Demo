import { spawner } from './spawner.js';
import * as ships from './ships.js';
import * as teams from './teams.js';

export const CREDIT_SPAWNER = new spawner({
  frequency: 100,
  spawnTemplate: ships.FIGHTER_1,
  team: teams.RED,
  onlyEdges: true,
});
