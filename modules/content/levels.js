import { Level } from '../classes/Level.js';
import * as ships from './ships.js';
import * as teams from './teams.js';
import * as spawners from './spawners.js';
import * as objects from './objects.js';

export const TEST_LEVEL = new Level({
  gridSize: 3,
  spawns: [
    {type: 'Player', template: ships.FIGHTER_1, team: teams.BLUE},
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE},
    // {type: 'Spawner', template: spawners.CREDIT_SPAWNER},
    {type: 'Spawner', template: spawners.ENEMY_SPAWNER},
    {type: 'Spawner', template: spawners.GOOD_SPAWNER},
  ],
});
