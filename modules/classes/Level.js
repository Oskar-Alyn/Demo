import { GameObject } from './GameObject.js';
import { Graphic } from './Graphic.js';
import { Ship } from './Ship.js';
import { Spawner } from './Spawner.js';
import { GRID_SQUARE_SIZE, HUD_COLOR } from '../globalConstants.js';
import { Ai } from './Ai.js';
import { EdgeBinder } from './EdgeBinder.js';

export class Level {
  constructor(levelTemplate) {
    this.spawns = levelTemplate.spawns;
    this.gridSize = levelTemplate.gridSize;
  }

  // creates a grid graphic based on two parameters
  generateGrid(squareSize, gridSize) {
    let gridGraphic = [];
    let lineLength = squareSize * (gridSize - 1);

    for (let i = -1 * gridSize; i < gridSize; i++) {
      for (let ii = -1 * gridSize; ii < gridSize; ii++) {
        gridGraphic[gridGraphic.length] = [[squareSize * i, squareSize * ii, 0], [squareSize * i, squareSize * (ii + 1), 0]];
        gridGraphic[gridGraphic.length] = [[squareSize * i, squareSize * ii, 0], [squareSize * (i + 1), squareSize * ii, 0]];

        if (i == gridSize - 1 || ii == gridSize - 1) {
          gridGraphic[gridGraphic.length] = [[squareSize * (i + 1), squareSize * ii, 0], [squareSize * (i + 1), squareSize * (ii + 1), 0]];
          gridGraphic[gridGraphic.length] = [[squareSize * i, squareSize * (ii + 1), 0], [squareSize * (i + 1), squareSize * (ii + 1), 0]];
        }
      }
    }

    return new Graphic(gridGraphic, 1);
  }

  // puts the level grid into the world
  addWorldGrid(gameLoop) {
    let grid = new GameObject({
      graphic: this.generateGrid(GRID_SQUARE_SIZE, this.gridSize),
      color: HUD_COLOR,
      scale: 1,
    });
    grid.r = Math.PI / 4;
    gameLoop.registerObject(grid);
  }

  // cleans out old objects for new level
  cleanGameLoop (game) {
    for (let i = 0; i < game.gameLoop.objectsToRun.length; i++) {
      let obj = game.gameLoop.objectsToRun[i];

      if (obj !== game.display && obj !== game.targetingSystem && obj !== game.keyboardController) {
        game.gameLoop.unregisterObject(obj);
      }
    }
  }

  // loads the level from the template
  loadLevel (game) {
    this.cleanGameLoop(game);

    // add grid first so it shows in back
    this.addWorldGrid(game.gameLoop);

    // bind edges to grid size
    game.gameLoop.registerObject(new EdgeBinder(GRID_SQUARE_SIZE * this.gridSize * 2));

    // spawn designated ships
    for (let i = 0; i < this.spawns.length; i++) {
      let info = this.spawns[i];
      let spawn;

      // differentiate possible spawn types
      if (info.type == 'Ship') {
        spawn = new Ship(info.template, info.team);

      } else if (info.type == 'Player') {
        spawn = new Ship(info.template, info.team);
        spawn.behaviour = new Ai({aiFunction: function() {}, detectionDistance: 0});
        game.player = spawn;
        game.display.cameraFollowObject = spawn;

      } else if (info.type == 'Spawner') {
        let effectiveTeam = (typeof info.team !== 'undefined' ? info.team : null );
        spawn = new Spawner(info.template, this.gridSize * GRID_SQUARE_SIZE, effectiveTeam);

      } else if (info.type == 'Object') {
        spawn = new GameObject(info.template);

      }

      // set location according to info
      if (typeof(info.x) !== 'undefined') { spawn.x = info.x };
      if (typeof(info.y) !== 'undefined') { spawn.y = info.y };
      if (typeof(info.z) !== 'undefined') { spawn.z = info.z };
      if (typeof(info.r) !== 'undefined') { spawn.r = info.r };

      // add the spawn to the game
      game.gameLoop.registerObject(spawn);
    }
  }
}
