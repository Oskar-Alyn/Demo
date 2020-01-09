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

  run (game) {
    this.updateCamera();

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.x0 = this.canvas.width / 2 - this.cameraX;
    this.y0 = this.canvas.height / 2 - this.cameraY;

    for (let i = 0; i < game.gameLoop.objectsToRun.length; i++) {
      if (typeof game.gameLoop.objectsToRun[i].graphic !== 'undefined') {
        game.gameLoop.objectsToRun[i].graphic.draw(game.gameLoop.objectsToRun[i], this);
      }
    }

    // TEMPORARY FIX
    this.context.fillStyle = "white";
    this.context.font = "30px Arial";
    this.context.fillText("Credits: " + game.state.playerCredits, 10, 40);
  }
}
