export class Game {
  constructor () {
    this.gameLoop;
    this.display;
    this.state;
    this.player;
  }

  loadLevel (level) {
    level.loadLevel(this);
  }
}
