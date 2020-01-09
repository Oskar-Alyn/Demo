import * as graphics from './objectGraphics.js';
import { COLLECTIBLE_AI } from './ais.js';
import { Ai } from '../classes/Ai.js';

export const CREDIT = {
  graphic: graphics.credit_graphic,
  scale: 1,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: COLLECTIBLE_AI,
    detectionDistance: 400,
  },
}

export const BASIC_LASER = {
  graphic: graphics.basic_laser_graphic,
  scale: 1,
  color: '#FFFFFF',
  behaviour: function(anObject) {
    anObject.Vx += Math.cos(anObject.r) * 2;;
    anObject.Vy += Math.sin(anObject.r) * 2;;
  }
}
