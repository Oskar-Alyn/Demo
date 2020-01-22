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
