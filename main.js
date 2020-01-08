import { initialize } from './modules/initialize.js';

let GAME = initialize();




// TEMPORARY
import * as graphics from './modules/shipGraphics.js';
import { keyboardController } from './modules/keyboardController.js';
import { BASE_AI, NULL_AI } from './modules/ais.js';

import * as ships from './modules/ships.js';

let PLAYER = GAME.spawn(ships.FIGHTER_1);
new keyboardController(PLAYER);

let BASE = GAME.spawn(ships.BASE_1);
BASE.x = 1400;
