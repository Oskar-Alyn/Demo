import * as consts from '../globalConstants.js';
import { pythagorean, angleTo } from '../mathExtention.js'

export class Display {
  constructor () {
    this.canvas = document.getElementById(consts.CANVAS_ID);
    this.context = this.canvas.getContext(consts.CANVAS_CONTEXT);

    this.worldScale;

    this.cameraFollowObject = null;
    this.cameraX = 0;
    this.cameraY = 0;
    this.cameraR = 0;
    this.cameraTilt = 1;

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

  updateCamera(game) {
    // determine camera tilt
    let playerSpeed = pythagorean(game.player.Vx, game.player.Vy, 0, 0);
    let speedAngle = (game.player.r - game.player.offset) - angleTo(game.player.Vx, game.player.Vy, 0, 0);
    playerSpeed = Math.cos(speedAngle) * playerSpeed; // make speed relative to direction facing
    let angle = ((Math.tanh(playerSpeed / (game.player.speed * 40)) * (1 - consts.MIN_CAMERA_ANGLE))) + consts.MIN_CAMERA_ANGLE
    game.state.cameraTilt = angle; // bind to max 1

    // move camera
    if (this.cameraFollowObject !== null) {
      this.cameraX = this.cameraFollowObject.x;
      this.cameraY = this.cameraFollowObject.y;
      if (this.cameraR < this.cameraFollowObject.r) {
        this.cameraR += Math.abs(this.cameraR - this.cameraFollowObject.r) / consts.HORIZONTAL_CAMERA_LAG;
      } else {
        this.cameraR -= Math.abs(this.cameraR - this.cameraFollowObject.r) / consts.HORIZONTAL_CAMERA_LAG;
      }
      if (this.cameraTilt < game.state.cameraTilt) {
        this.cameraTilt += Math.abs(this.cameraTilt - game.state.cameraTilt) / consts.VERTICAL_CAMERA_LAG;
      } else {
        this.cameraTilt -= Math.abs(this.cameraTilt - game.state.cameraTilt) / consts.VERTICAL_CAMERA_LAG;
      }
    }
  }

  run (game) {
    this.state = game.state; // REMOVE, needed for keypress

    this.worldScale = game.state.worldScale; // used by graphics

    this.updateCamera(game);

    this.zFactor = Math.sin(3.14159 / 2 * this.cameraTilt);
    this.yFactor = Math.cos(3.14159 / 2 * this.cameraTilt);
    this.y0 = (this.canvas.height / 2) * (1 + (this.cameraTilt * 0.8));

    // reset canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw all objects
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
