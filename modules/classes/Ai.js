import { pythagorean } from '../mathExtention.js';

export class Ai {
  constructor (template) {
    this.aiFunction = template.aiFunction;
    this.aiTarget = null;
    this.detectionRange = template.detectionDistance;
    this.targetDistance = this.detectionRange;
  }

  run (aShip, game) {
    if (aShip == this.aiTarget) {
      console.log('Error: Targeting self');
      this.aiTarget = null;
      this.targetDistance = this.detectionRange;
    }

    if (this.aiTarget !== null) {
      this.targetDistance = pythagorean(aShip.x, aShip.y, this.aiTarget.x, this.aiTarget.y);
    }

    this.aiFunction(aShip, this, game);
  }
}
