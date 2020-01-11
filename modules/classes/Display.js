import * as consts from '../globalConstants.js';
import { pythagorean } from '../mathExtention.js'

export class Display {
  constructor () {
    this.canvas = document.getElementById(consts.CANVAS_ID);
    this.context = this.canvas.getContext(consts.CANVAS_CONTEXT);

    this.worldScale;

    this.cameraFollowObject = null;
    this.cameraX = 0;
    this.cameraY = 0;
    this.cameraR = 0;

    this.x0 = this.canvas.width / 2;
    this.y0;

    this.zFactor;
    this.yFactor;

    document.addEventListener('keypress', e => this.logKeyPress(e));
    this.state;
  }

  logKeyPress(e) {
    if (e.keyCode == 43) { this.state.worldScale += 1; };
    if (e.keyCode == 45) { if (this.state.worldScale > 1) this.state.worldScale -= 1; };
  }

  updateCamera() {
    if (this.cameraFollowObject !== null) {
      this.cameraX = this.cameraFollowObject.x;
      this.cameraY = this.cameraFollowObject.y;
      if (this.cameraR < this.cameraFollowObject.r) {
        this.cameraR += Math.abs(this.cameraR - this.cameraFollowObject.r) / consts.CAMERA_LAG;
      } else {
        this.cameraR -= Math.abs(this.cameraR - this.cameraFollowObject.r) / consts.CAMERA_LAG;
      }

    }
  }

  run (game) {
    this.state = game.state; // REMOVE

    this.worldScale = game.state.worldScale;

    let playerSpeed = pythagorean(game.player.Vx, game.player.Vy, 0, 0);
    let angle = ((Math.tanh(playerSpeed / (game.player.speed * 40)) * (1 - consts.MIN_CAMERA_ANGLE))) + consts.MIN_CAMERA_ANGLE
    game.state.cameraTilt = angle; // bind to max 1

    this.zFactor = Math.sin(3.14159 / 2 * game.state.cameraTilt);
    this.yFactor = Math.cos(3.14159 / 2 * game.state.cameraTilt);

    this.updateCamera();

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.y0 = (this.canvas.height / 2) * (1 + game.state.cameraTilt);

    for (let i = 0; i < game.gameLoop.objectsToRun.length; i++) {
      if (typeof game.gameLoop.objectsToRun[i].graphic !== 'undefined') {
        game.gameLoop.objectsToRun[i].graphic.draw(game.gameLoop.objectsToRun[i], this);
      }
    }

    // TEMPORARY FIX
    this.context.fillStyle = "white";
    this.context.font = "30px Arial";
    this.context.fillText("Credits: " + game.state.playerCredits, 10, 40);
    this.context.fillText("Player Shield: " + game.player.shield, 10, 70);
  }
}
