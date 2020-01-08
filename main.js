import { initialize } from './modules/initialize.js';

let GAME = initialize();




// TEMPORARY
import { keyboardController } from './modules/keyboardController.js';
import * as ships from './modules/ships.js';

let PLAYER = GAME.spawn(ships.FIGHTER_1);
new keyboardController(PLAYER);
GAME.gameLoop.objectsToRun[0].cameraFollowObject = PLAYER;

let BASE = GAME.spawn(ships.BASE_1);
