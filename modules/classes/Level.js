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
    this.stars = levelTemplate.stars;
    this.gridSize = levelTemplate.gridSize;
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

    // add star
    game.gameLoop.registerObject(new GameObject({
      graphic: this.stars,
      color: '#FFFFFF',
    }));

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
        game.display.cameraR = (typeof(info.yaw) !== 'undefined' ? info.yaw: 0);

      } else if (info.type == 'Spawner') {
        let effectiveTeam = (typeof info.team !== 'undefined' ? info.team : null );
        spawn = new Spawner(info.template, this.gridSize * GRID_SQUARE_SIZE, effectiveTeam);
        spawn.spawnTemplate = info.spawn;

      } else if (info.type == 'Object') {
        spawn = new GameObject(info.template);

      }

      // set location according to info
      if (typeof(info.x) !== 'undefined') { spawn.x = info.x };
      if (typeof(info.y) !== 'undefined') { spawn.y = info.y };
      if (typeof(info.z) !== 'undefined') { spawn.z = info.z };
      if (typeof(info.yaw) !== 'undefined') { spawn.yaw= info.yaw};

      // add the spawn to the game
      game.gameLoop.registerObject(spawn);
    }
  }
}
