import { initialize } from './modules/initialize.js';
import * as levels from './modules/levels.js';

let GAME = initialize();
GAME.loadLevel(levels.TEST_LEVEL);
