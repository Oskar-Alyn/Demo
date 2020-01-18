import * as consts from '../globalConstants.js';

export class State {
  constructor () {
    this.playerCredits = 0;
    this.cameraTilt = consts.DEFAULT_CAMERA_ANGLE;
    this.worldScale = consts.DEFAULT_CAMERA_ZOOM;
  }
}
