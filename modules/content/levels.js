import { Level } from '../classes/Level.js';
import * as ships from './ships.js';
import * as teams from './teams.js';
import * as spawners from './spawners.js';
import * as objects from './objects.js';

export const TEST_LEVEL = new Level({
  gridSize: 30,
  spawns: [
    // player
    {type: 'Player', template: ships.SKIRMISHER_1, team: teams.BLUE, x: 450, y: 450, r: Math.PI * -0.25},

    // blue base
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE, x: 550, y: 550},
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE, x: 450, y: 550},
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE, x: 550, y: 450},

    // red base
    {type: 'Ship', template: ships.BASE_1, team: teams.RED, x: -550, y: -550},
    {type: 'Ship', template: ships.BASE_1, team: teams.RED, x: -450, y: -550},
    {type: 'Ship', template: ships.BASE_1, team: teams.RED, x: -550, y: -450},

    // {type: 'Spawner', template: spawners.CREDIT_SPAWNER},
    // {type: 'Spawner', template: spawners.FIGHTER_1_SPAWNER, team: teams.BLUE},
    // {type: 'Spawner', template: spawners.FIGHTER_1_SPAWNER, team: teams.RED},
    // {type: 'Spawner', template: spawners.FIREBEAST_1_SPAWNER, team: teams.WHITE},
    // {type: 'Spawner', template: spawners.ACIDBEAST_1_SPAWNER, team: teams.WHITE},

    // {type: 'Ship', template: ships.MULTIPART, team: teams.BLUE},
  ],
});
