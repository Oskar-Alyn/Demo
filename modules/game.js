import { ship } from './ship.js';
import { ai } from './ai.js';

export class game {
  constructor (aGameLoop) {
    this.gameLoop = aGameLoop;
  }

  spawn (graphic, color, aiType) {
    let thisAi = new ai(aiType);
    let newGameObject = new ship(graphic, color, 1, 0.6, 0.0001, thisAi);
    this.gameLoop.registerObject(newGameObject);

    return newGameObject;
  }
}
