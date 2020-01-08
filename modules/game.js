import { ship } from './ship.js';

export class game {
  constructor (aGameLoop) {
    this.gameLoop = aGameLoop;
  }

  spawn (shipTemplate) {
    let returnShip = new ship(
      shipTemplate.graphic,
      shipTemplate.color,
      shipTemplate.scale,
      shipTemplate.speed,
      shipTemplate.rotationSpeed,
      shipTemplate.aiType,
      shipTemplate.weapon,
    );

    this.gameLoop.registerObject(returnShip);

    return returnShip;
  }
}
