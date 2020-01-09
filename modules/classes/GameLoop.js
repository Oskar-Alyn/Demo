import { FRAMES_PER_SECOND } from '../globalConstants.js';

export class GameLoop {
  constructor(game) {
    this.game = game;
    this.objectsToRun = [];
  }

  registerObject(anObject) {
    this.objectsToRun[this.objectsToRun.length] = anObject;
  }

  unregisterObject(anObject) {
    for (let i = 0; i < this.objectsToRun.length; i++) {
      if (this.objectsToRun[i] == anObject) {
        this.objectsToRun.splice(i, 1);
        return null;
      }
    }
  }

  start() {
    setInterval(e => this.run(e), (1000 / FRAMES_PER_SECOND));
  }

  run() {
    for (let i = 0; i < this.objectsToRun.length; i++) {
      this.objectsToRun[i].run(this.game);
    }
  }
}
