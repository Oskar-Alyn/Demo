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
    this.cameraTilt = consts.DEFAULT_CAMERA_ANGLE;
    this.cameraDistance = consts.INITIAL_CAMERA_DISTANCE;

    this.x0 = this.canvas.width / 2;
    this.y0;

    this.zFactor;
    this.yFactor;

    this.debugMode = false;

    this.toDraw = [];
  }

  updateCamera(game) {
    // determine camera tilt
    let playerSpeed = pythagorean(game.player.Vx, game.player.Vy, 0, 0);
    let speedAngle = (game.player.r - game.player.offset) - angleTo(game.player.Vx, game.player.Vy, 0, 0);
    playerSpeed = Math.cos(speedAngle) * playerSpeed; // make speed relative to direction facing
    let angle = ((Math.tanh(playerSpeed / (game.player.speed * 40)) * (1 - consts.MIN_CAMERA_ANGLE))) + consts.MIN_CAMERA_ANGLE
    game.state.cameraTilt = angle; // bind to max 1

    // change camera distance
    let targetDistance = 100;

    if (this.cameraDistance < this.cameraFollowObject.r) {
      this.cameraDistance += Math.abs(this.cameraDistance - targetDistance) / consts.DISTANCE_CAMERA_LAG;
    } else {
      this.cameraDistance -= Math.abs(this.cameraDistance - targetDistance) / consts.DISTANCE_CAMERA_LAG;
    }

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
    this.worldScale = game.state.worldScale; // used by graphics

    this.updateCamera(game);

    this.zFactor = Math.sin(Math.PI / 2 * this.cameraTilt);
    this.yFactor = Math.cos(Math.PI / 2 * this.cameraTilt);

    this.y0 = (this.canvas.height / 2) * (1 + (this.cameraTilt * 0.8));

    // reset canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.toDraw = [];

    // get all lines to draw
    for (let i = 0; i < game.gameLoop.objectsToRun.length; i++) {
      if (typeof game.gameLoop.objectsToRun[i].graphic !== 'undefined') {
        game.gameLoop.objectsToRun[i].graphic.draw(game.gameLoop.objectsToRun[i], this);
      }
    }

    // sort by distance to camera
    this.toDraw.sort(function(a, b) { return b.distance - a.distance });

    // do actual drawing
    for (let i = 0; i < this.toDraw.length; i++) {
      let line = this.toDraw[i];

      this.context.strokeStyle = line.color;
      this.context.lineWidth = line.weight;
      this.context.globalAlpha = line.alpha;

      this.context.beginPath();
      this.context.moveTo(line.x1, line.y1);
      this.context.lineTo(line.x2, line.y2);
      this.context.stroke();
    }

  }
}
