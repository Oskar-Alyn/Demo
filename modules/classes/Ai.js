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
      // update distance
      let xDistance = Math.abs(aShip.x - this.aiTarget.x);
      let yDistance = Math.abs(aShip.y - this.aiTarget.y);
      this.targetDistance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));
    }

    this.aiFunction(aShip, this, game);
  }
}
