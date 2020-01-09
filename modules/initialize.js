import { Game } from './classes/Game.js';
import { GameLoop } from './classes/GameLoop.js';
import { Display } from './classes/Display.js';

export function initialize() {
  // create the main gameLoop
  let GAMELOOP = new GameLoop();

  // add the display object to the main gameloop
  GAMELOOP.registerObject(new Display());

  // create game object for return
  let GAME = new Game(GAMELOOP);

  // start GameLoop
  GAMELOOP.start();

  return GAME;
}
