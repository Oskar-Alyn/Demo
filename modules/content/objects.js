import * as graphics from './objectGraphics.js';
import * as ais from './ais.js';

export const CREDIT = {
  graphic: graphics.credit_graphic,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.COLLECTIBLE_AI,
    detectionDistance: 30,
  },
}

export const SUN = {
  graphic: graphics.sun_graphic,
  color: '#FFFFFF',
  scale: 40,
  behaviour: {
    aiFunction: ais.SUN_AI,
    detectionDistance: 1,
  },
}
