export class Game {
  constructor () {
    this.gameLoop;
    this.display;
    this.state;
  }

  loadLevel (level) {
    level.loadLevel(this);
  }
}
