import { FRAMES_PER_SECOND } from '../globalConstants.js';

export class GameLoop {
  constructor(game) {
    this.game = game;
    this.objectsToRun = [];

    this.frame = 0;
    this.performance = 0;
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
    let t0 = performance.now();

    for (let i = 0; i < this.objectsToRun.length; i++) {
      this.objectsToRun[i].run(this.game);
    }
    this.frame++;

    var t1 = performance.now();
    this.performance += t1 - t0;

    let seconds = 2;

    if (this.frame % (FRAMES_PER_SECOND * seconds) == 0) {
      this.performance /= FRAMES_PER_SECOND * seconds;
      if (this.game.state.debugMode) {
        console.log("Percent of time used on average: " + Math.round(100 * (this.performance) / (1000 / FRAMES_PER_SECOND)) + '%')
      }
      this.performance = 0;
    }
  }
}
