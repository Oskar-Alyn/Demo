import { ROTATION_FRICTION, LINEAR_FRICTION } from './globalConstants.js';

export class gameObject {
  constructor(graphic, color, scale) {
    // physics properties
    this.x = 100;
    this.y = 150;
    this.r = 0;
    this.Vx = 0;
    this.Vy = 0;
    this.Vr = 0;

    // visual properties
    this.graphic = graphic;
    this.color = color;
    this.scale = scale;
  }

  doMotion() {
    this.x += this.Vx;
    this.y += this.Vy;
    this.r += this.Vr;
    this.Vx *= LINEAR_FRICTION;
    this.Vy *= LINEAR_FRICTION;
    this.Vr *= ROTATION_FRICTION;
  }

  run(aGameLoop) {
    this.doMotion();
  }
}
