export class Game {
  constructor (aGameLoop) {
    this.gameLoop = aGameLoop;
  }

  loadLevel (level) {
    level.loadLevel(this.gameLoop);
  }
}
