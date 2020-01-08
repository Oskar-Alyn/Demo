import * as consts from './globalConstants.js';

export class display {
  constructor () {
    this.canvas = document.getElementById(consts.CANVAS_ID);
    this.context = this.canvas.getContext(consts.CANVAS_CONTEXT);

    // TEMP FIX
    this.context.lineWidth = 2;
  }

  run (aGameLoop) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < aGameLoop.objectsToRun.length; i++) {
      if (typeof aGameLoop.objectsToRun[i].graphic !== 'undefined') {
        aGameLoop.objectsToRun[i].graphic.draw(aGameLoop.objectsToRun[i], this.context);
      }
    }
  }
}
