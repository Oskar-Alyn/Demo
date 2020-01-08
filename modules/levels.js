import { level } from './level.js';
import * as ships from './ships.js';
import * as teams from './teams.js';

export const TEST_LEVEL = new level({
  gridSize: 5,
  spawns: [
    {type: 'Player', template: ships.FIGHTER_1, team: teams.BLUE},
    {type: 'Ship', template: ships.BASE_1, team: teams.BLUE},
    {type: 'Ship', template: ships.FIGHTER_1, team: teams.RED, x: -600, y: 200},
  ],
});
