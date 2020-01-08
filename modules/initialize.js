import { game } from './game.js';
import { gameLoop } from './gameLoop.js';
import { display } from './display.js';

export function initialize() {
  // create the main gameLoop
  let GAMELOOP = new gameLoop();

  // add the display object to the main gameloop
  GAMELOOP.registerObject(new display());

  // create game object for return
  let GAME = new game(GAMELOOP);

  // start GameLoop
  GAMELOOP.start();

  return GAME;
}
