export class KeyboardController {
  constructor(aGameObject) {
    this.controlledObject = aGameObject;

    document.addEventListener('keydown', e => this.logKeyDown(e));
    document.addEventListener('keyup', e => this.logKeyUp(e));
  }

  logKeyDown(e) {
    if (e.keyCode == 87) { this.controlledObject.movingForward = true; };
    if (e.keyCode == 83) { this.controlledObject.movingBackward = true; };
    if (e.keyCode == 65) { this.controlledObject.turningLeft = true; };
    if (e.keyCode == 68) { this.controlledObject.turningRight = true; };
    if (e.keyCode == 32) { this.controlledObject.useWeapon = true; };
  }

  logKeyUp(e) {
    if (e.keyCode == 87) { this.controlledObject.movingForward = false; };
    if (e.keyCode == 83) { this.controlledObject.movingBackward = false; };
    if (e.keyCode == 65) { this.controlledObject.turningLeft = false; };
    if (e.keyCode == 68) { this.controlledObject.turningRight = false; };
    if (e.keyCode == 32) { this.controlledObject.useWeapon = false; };
  }
}
