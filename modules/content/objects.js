import * as graphics from './objectGraphics.js';
import * as generators from './graphicGenerators.js';
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

export const GRID = {
  graphic: generators.radial_grid_generator(4, 24),
  color: '#FFFFFF',
  scale: 60,
}
