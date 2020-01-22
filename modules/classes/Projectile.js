import { GameObject } from './GameObject.js';
import { PROJECTILE_AI } from '../content/ais.js';
import { Ai } from './Ai.js';

export class Projectile extends GameObject {
  constructor( template ) {
    super( template );

    this.damage = template.damage;
    this.behaviour = new Ai ({
      aiFunction: PROJECTILE_AI,
      detectionDistance: 200, // REWORK at some point
    });
  }
}
