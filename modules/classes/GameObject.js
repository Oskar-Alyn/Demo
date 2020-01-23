import { ROTATION_FRICTION, LINEAR_FRICTION } from '../globalConstants.js';
import { Ai } from './Ai.js';

export class GameObject {
  constructor (template) {
    // physics properties
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.r = 0;
    this.Vx = 0;
    this.Vy = 0;
    this.Vr = 0;

    // visual properties
    if (typeof template.graphic == 'function') {
      this.graphic = template.graphic();
    } else {
      this.graphic = template.graphic;
    }
    this.color = (typeof template.color !== 'undefined' ? template.color : '#FFFFFF');
    this.scale = (typeof template.scale !== 'undefined' ? template.scale : 1);
    this.alpha = 1;

    // behaviour properties
    if (typeof(template.behaviour) == 'undefined') {
      this.behaviour = null;
    } else if (typeof(template.behaviour) == 'object') {
      this.behaviour = new Ai(template.behaviour);
    } else {
      this.behaviour = template.behaviour;
    }
  }

  runBehaviour (game) {
    if (this.behaviour !== null) {
      if (typeof(this.behaviour) == 'object') {
        this.behaviour.run(this, game);
      } else {
        this.behaviour(this);
      }
    }
  }

  push (direction, force) {
    this.Vx += Math.cos(direction) * force;;
    this.Vy += Math.sin(direction) * force;;
  }

  doMotion () {
    this.x += this.Vx;
    this.y += this.Vy;
    this.r += this.Vr;
    this.Vx *= LINEAR_FRICTION;
    this.Vy *= LINEAR_FRICTION;
    this.Vr *= ROTATION_FRICTION;
  }

  run (game) {
    this.runBehaviour(game);
    this.doMotion();
  }
}
