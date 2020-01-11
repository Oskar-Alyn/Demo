import * as graphics from './objectGraphics.js';
import * as ais from './ais.js';
import { Ai } from '../classes/Ai.js';

export const CREDIT = {
  graphic: graphics.credit_graphic,
  scale: 1,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.COLLECTIBLE_AI,
    detectionDistance: 30,
  },
}

export const BASIC_LASER = {
  graphic: graphics.basic_laser_graphic,
  scale: 2,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.PROJECTILE_AI,
    detectionDistance: 2,
  },
}
