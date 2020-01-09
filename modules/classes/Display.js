import * as consts from '../globalConstants.js';

export class Display {
  constructor () {
    this.canvas = document.getElementById(consts.CANVAS_ID);
    this.context = this.canvas.getContext(consts.CANVAS_CONTEXT);

    this.cameraX = 0;
    this.cameraY = 100;
    this.x0 = 0;
    this.y0 = 0;
    this.cameraFollowObject = null;
    this.maxCameraDistance = 1.5;
  }

  updateCamera() {
    if (this.cameraFollowObject !== null) {
      this.cameraX = this.cameraFollowObject.x / this.maxCameraDistance;
      this.cameraY = this.cameraFollowObject.y / this.maxCameraDistance;
    }
  }

  run (aGameLoop) {
    this.updateCamera();

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.x0 = this.canvas.width / 2 - this.cameraX;
    this.y0 = this.canvas.height / 2 - this.cameraY;

    for (let i = 0; i < aGameLoop.objectsToRun.length; i++) {
      if (typeof aGameLoop.objectsToRun[i].graphic !== 'undefined') {
        aGameLoop.objectsToRun[i].graphic.draw(aGameLoop.objectsToRun[i], this);
      }
    }
  }
}
