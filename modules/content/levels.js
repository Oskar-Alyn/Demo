import { Level } from '../classes/Level.js';
import * as stars from './starFields.js';
import * as ships from './ships.js';
import * as teams from './teams.js';
import * as spawners from './spawners.js';
import * as objects from './objects.js';

export const SAMPLE_LEVEL = new Level({
  gridSize: 30,
  stars: stars.TEST_FIELD,
  spawns: [
    // player
    {type: 'Player', template: ships.SKIRMISHER_1, team: teams.BLUE, x: 450, y: 450, yaw: Math.PI * -0.25},

    // the star
    {type: 'Object', template: objects.SUN},

    // blue base
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE, x: 550, y: 550},
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE, x: 450, y: 550},
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE, x: 550, y: 450},

    // red base
    {type: 'Ship', template: ships.BASE_1, team: teams.RED, x: -550, y: -550},
    {type: 'Ship', template: ships.BASE_1, team: teams.RED, x: -450, y: -550},
    {type: 'Ship', template: ships.BASE_1, team: teams.RED, x: -550, y: -450},

    // team spawners
    {type: 'Spawner', template: spawners.FIELD_SPAWNER, spawn: ships.FIGHTER_1, team: teams.BLUE},
    {type: 'Spawner', template: spawners.FIELD_SPAWNER, spawn: ships.FIGHTER_1, team: teams.RED},

    // alien spawners
    {type: 'Spawner', template: spawners.RARE_EDGE_SPAWNER, spawn: ships.FIGHTER_2, team: teams.PURPLE},
    {type: 'Spawner', template: spawners.RARE_EDGE_SPAWNER, spawn: ships.SKIRMISHER_1, team: teams.PURPLE},
    {type: 'Spawner', template: spawners.RARE_EDGE_SPAWNER, spawn: ships.HEAVY_1, team: teams.PURPLE},

    // beast spawners
    {type: 'Spawner', template: spawners.RARE_EDGE_SPAWNER, spawn: ships.FIREBEAST_1, team: teams.ORANGE},
    {type: 'Spawner', template: spawners.RARE_EDGE_SPAWNER, spawn: ships.ACIDBEAST_1, team: teams.GREEN},
    {type: 'Spawner', template: spawners.RARE_EDGE_SPAWNER, spawn: ships.LIGHTNINGBEAST_1, team: teams.YELLOW},
    {type: 'Spawner', template: spawners.RARE_EDGE_SPAWNER, spawn: ships.TALONBEAST_1, team: teams.WHITE},
  ],
});

export const TEST_LEVEL = new Level({
  gridSize: 12,
  stars: stars.TEST_FIELD,
  spawns: [
    {type: 'Player', template: ships.SKIRMISHER_1, team: teams.BLUE, x: 150, y: 150, yaw: Math.PI * -0.25},
    {type: 'Ship', template: ships.FIGHTER_1, team: teams.RED, x: -550, y: -550},
  ],
});
