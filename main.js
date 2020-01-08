import { initialize } from './modules/initialize.js';

let GAME = initialize();




// TEMPORARY
import * as graphics from './modules/shipGraphics.js';
import { keyboardController } from './modules/keyboardController.js';
import { BASE_AI, NULL_AI } from './modules/ais.js';

let PLAYER = GAME.spawn(graphics.fighter_1_graphic, '#00FFFF', NULL_AI);
new keyboardController(PLAYER);

let BASE = GAME.spawn(graphics.base_1_graphic, '#00FFFF', BASE_AI);
BASE.x = 1700;
let TURR = GAME.spawn(graphics.turret_1_graphic, '#00FFFF', BASE_AI);
TURR.x = 500;
let CRED = GAME.spawn(graphics.credit_graphic, '#00FFFF', BASE_AI);
CRED.x = 800;
