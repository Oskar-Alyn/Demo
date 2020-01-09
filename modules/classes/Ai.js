export class Ai {
  constructor(aiFunction) {
    this.aiFunction = aiFunction;
  }

  run(aShip) {
    this.aiFunction(aShip);
  }
}
