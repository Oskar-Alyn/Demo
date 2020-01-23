import { initialize } from './modules/initialize.js';
import * as levels from './modules/content/levels.js';

let GAME = initialize();
GAME.loadLevel(levels.SAMPLE_LEVEL);
