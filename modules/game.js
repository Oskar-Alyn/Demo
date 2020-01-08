import { ship } from './ship.js';

export class game {
  constructor (aGameLoop) {
    this.gameLoop = aGameLoop;
  }

  loadLevel (level) {
    level.loadLevel(this.gameLoop);
  }
}
