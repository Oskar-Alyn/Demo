import { ship } from './ship.js';

export class game {
  constructor (aGameLoop) {
    this.gameLoop = aGameLoop;
  }

  spawn (shipTemplate, team) {
    let returnShip = new ship(shipTemplate, team);

    this.gameLoop.registerObject(returnShip);

    return returnShip;
  }
}
