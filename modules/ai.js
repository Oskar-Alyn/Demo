export class ai {
  constructor(aiFunction) {
    this.aiFunction = aiFunction;
  }

  run(aShip) {
    this.aiFunction(aShip);
  }
}
