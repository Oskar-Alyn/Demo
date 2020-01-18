import { Level } from '../classes/Level.js';
import * as ships from './ships.js';
import * as teams from './teams.js';
import * as spawners from './spawners.js';
import * as objects from './objects.js';

export const TEST_LEVEL = new Level({
  gridSize: 7,
  spawns: [
    {type: 'Player', template: ships.SKIRMISHER_1, team: teams.BLUE},
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE},
    // {type: 'Spawner', template: spawners.CREDIT_SPAWNER},
    {type: 'Spawner', template: spawners.FIGHTER_1_SPAWNER, team: teams.BLUE},
    {type: 'Spawner', template: spawners.FIGHTER_1_SPAWNER, team: teams.RED},
    {type: 'Spawner', template: spawners.FIGHTER_1_SPAWNER, team: teams.GREEN},
    {type: 'Spawner', template: spawners.FIGHTER_2_SPAWNER, team: teams.PURPLE},
    {type: 'Spawner', template: spawners.HEAVY_1_SPAWNER, team: teams.PURPLE},
    {type: 'Spawner', template: spawners.SKIRMISHER_1_SPAWNER, team: teams.WHITE},
    {type: 'Spawner', template: spawners.MULTIPART_1_SPAWNER, team: teams.WHITE},

    {type: 'Ship', template: ships.MULTIPART, team: teams.BLUE},
  ],
});
