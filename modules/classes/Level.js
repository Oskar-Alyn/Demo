import { GameObject } from './GameObject.js';
import { Graphic } from './Graphic.js';
import { Ship } from './Ship.js';
import { Spawner } from './Spawner.js';
import { GRID_SQUARE_SIZE, HUD_COLOR } from '../globalConstants.js';
import { KeyboardController } from './KeyboardController.js';
import { Ai } from './ai.js';

export class Level {
  constructor(levelTemplate) {
    this.spawns = levelTemplate.spawns;
    this.gridSize = levelTemplate.gridSize;
  }

  generateGrid(squareSize, gridSize) {
    let gridGraphic = [];
    let lineLength = squareSize * (gridSize - 1);

    for (let i = 0; i < gridSize; i++) {
      gridGraphic[i * 4]     = [[squareSize * i, lineLength, 0], [squareSize * i, lineLength * -1, 0]];
      gridGraphic[i * 4 + 1] = [[lineLength, squareSize * i, 0], [lineLength * -1, squareSize * i, 0]];
      gridGraphic[i * 4 + 2] = [[squareSize * i * -1, lineLength, 0], [squareSize * i * -1, lineLength * -1, 0]];
      gridGraphic[i * 4 + 3] = [[lineLength, squareSize * i * -1, 0], [lineLength * -1, squareSize * i * -1, 0]];
    }

    return new Graphic(gridGraphic, 1);
  }

  addWorldGrid(gameLoop) {
    let grid = new GameObject({
      graphic: this.generateGrid(GRID_SQUARE_SIZE, this.gridSize),
      color: HUD_COLOR,
      scale: 1,
    });
    grid.r = 3.14115 / 4;
    gameLoop.registerObject(grid);
  }

  loadLevel(game) {
    // add grid first so it shows in back
    this.addWorldGrid(game.gameLoop);

    // spawn designated ships
    for (let i = 0; i < this.spawns.length; i++) {
      let spawnInfo = this.spawns[i];
      let spawn;

      // differentiate possible spawn types
      if (spawnInfo.type == 'Ship') {
        spawn = new Ship(spawnInfo.template, spawnInfo.team);

      } else if (spawnInfo.type == 'Player') {
        spawn = new Ship(spawnInfo.template, spawnInfo.team);
        spawn.behaviour = new Ai({aiFunction: function(aShip, ai){ return null; }, detectionDistance: 1});
        new KeyboardController(spawn);
        game.player = spawn;
        game.gameLoop.objectsToRun[0].cameraFollowObject = spawn; // FIX TO MORE ROBUST SYSTEM

      } else if (spawnInfo.type == 'Spawner') {
        spawn = new Spawner(spawnInfo.template, this.gridSize * GRID_SQUARE_SIZE)

      } else if (spawnInfo.type == 'Object') {
        spawn = new GameObject(spawnInfo.template)

      } else {
        console.log('Not a valid type for levels: ' + spawnInfo.type);
        return null;
      }

      // set location according to info
      if (typeof(spawnInfo.x) !== 'undefined') { spawn.x = spawnInfo.x };
      if (typeof(spawnInfo.y) !== 'undefined') { spawn.y = spawnInfo.y };
      if (typeof(spawnInfo.r) !== 'undefined') { spawn.r = spawnInfo.r };

      // add the spawn to the game
      game.gameLoop.registerObject(spawn);
    }
  }
}
