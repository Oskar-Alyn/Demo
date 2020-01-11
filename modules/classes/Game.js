export class Game {
  constructor () {
    // meta
    this.gameLoop;
    this.display;
    this.targetingSystem;
    this.state;

    // diagetic
    this.player;
  }

  loadLevel (level) {
    level.loadLevel(this);
  }
}
