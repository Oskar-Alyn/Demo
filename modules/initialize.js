import { game } from './game.js';
import { gameObject } from './gameObject.js';
import { gameLoop } from './gameLoop.js';
import { graphic} from './graphics.js';
import { display } from './display.js';

export function initialize() {
  // create the main gameLoop
  let GAMELOOP = new gameLoop();

  // add the display object to the main gameloop
  GAMELOOP.registerObject(new display());

  // add the background grid
  function generateWorldGrid(squareSize, gridSize) {
    let gridGraphic = [];
    let lineLength = squareSize * (gridSize - 1);

    for (let i = 0; i < gridSize; i++) {
      gridGraphic[i * 4]     = [[squareSize * i, lineLength, 0], [squareSize * i, lineLength * -1, 0]];
      gridGraphic[i * 4 + 1] = [[lineLength, squareSize * i, 0], [lineLength * -1, squareSize * i, 0]];
      gridGraphic[i * 4 + 2] = [[squareSize * i * -1, lineLength, 0], [squareSize * i * -1, lineLength * -1, 0]];
      gridGraphic[i * 4 + 3] = [[lineLength, squareSize * i * -1, 0], [lineLength * -1, squareSize * i * -1, 0]];

    }

    return new graphic(gridGraphic);
  }

  let GRID = new gameObject(generateWorldGrid(400, 5), '#606060', 1);
  GRID.r = 3.14115 / 4;
  GAMELOOP.registerObject(GRID);

  // create game object for return
  let GAME = new game(GAMELOOP);

  // start GameLoop
  GAMELOOP.start();

  return GAME;
}
