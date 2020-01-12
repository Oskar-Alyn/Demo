export class KeyboardController {
  constructor(aGameObject) {
    this.w = false;
    this.a = false;
    this.s = false;
    this.d = false;

    this.space = false;

    this.plus = false;
    this.minus = false;

    document.addEventListener('keydown', e => this.logKeyDown(e));
    document.addEventListener('keyup', e => this.logKeyUp(e));
  }

  logKeyDown(e) {
    if (e.keyCode == 87) { this.w = true; };
    if (e.keyCode == 83) { this.a = true; };
    if (e.keyCode == 65) { this.s = true; };
    if (e.keyCode == 68) { this.d = true; };
    if (e.keyCode == 32) { this.space = true; };
    if (e.keyCode == 187) { this.plus = true };
    if (e.keyCode == 189) { this.minus = true };
  }

  logKeyUp(e) {
    if (e.keyCode == 87) { this.w = false; };
    if (e.keyCode == 83) { this.a = false; };
    if (e.keyCode == 65) { this.s = false; };
    if (e.keyCode == 68) { this.d = false; };
    if (e.keyCode == 32) { this.space = false; };
    if (e.keyCode == 187) { this.plus = false };
    if (e.keyCode == 189) { this.minus = false };
  }

  runW (game) {
    game.player.movingForward = this.w;
  }

  runA (game) {
    game.player.movingBackward = this.a;
  }

  runS (game) {
    game.player.turningLeft = this.s;
  }

  runD (game) {
    game.player.turningRight = this.d;
  }

  runSpace (game) {
    game.player.useWeapon = this.space;
  }

  runPlus (game) {
    if (this.plus) {
      game.state.worldScale += 0.05;
    }
  }

  runMinus (game) {
    if (this.minus && game.state.worldScale > 0.3) {
      game.state.worldScale -= 0.05;
    }
  }

  run (game) {
    this.runW(game);
    this.runA(game);
    this.runS(game);
    this.runD(game);
    this.runSpace(game);
    this.runPlus(game);
    this.runMinus(game);
  }
}
