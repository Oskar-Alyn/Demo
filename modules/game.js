import { ship } from './ship.js';
import { ai } from './ai.js';

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
    );

    this.gameLoop.registerObject(returnShip);

    return returnShip;
  }
}
