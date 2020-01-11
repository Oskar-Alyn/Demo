import { Game } from './classes/Game.js';
import { GameLoop } from './classes/GameLoop.js';
import { State } from './classes/State.js';
import { Display } from './classes/Display.js';
import { TargetingSystem } from './classes/TargetingSystem.js';

export function initialize() {
  // create game object for return
  let GAME = new Game();

  // create the main gameLoop
  let GAMELOOP = new GameLoop(GAME);
  GAME.gameLoop = GAMELOOP;

  // add the display object to the main gameloop, and game
  let DISPLAY = new Display();
  GAMELOOP.registerObject(DISPLAY);
  GAME.display = DISPLAY;

  // add game state to game
  let STATE = new State();
  GAME.state = STATE;

  // add the targeting object to the main gameloop
  let TARGETING = new TargetingSystem()
  GAMELOOP.registerObject(TARGETING);
  GAME.targetingSystem = TARGETING;

  // start GameLoop
  GAMELOOP.start();

  return GAME;
}
