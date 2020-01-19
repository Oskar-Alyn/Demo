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
    detectionDistance: 200,
  },
}

export const SKIRMISHER_LASER = {
  graphic: graphics.basic_laser_graphic,
  scale: 4,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.PROJECTILE_AI_2,
    detectionDistance: 200,
  },
}

export const HEAVY_LASER = {
  graphic: graphics.heavy_laser_graphic,
  scale: 1,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.PROJECTILE_AI_4,
    detectionDistance: 200,
  },
}

export const FIRE_BLAST = {
  graphic: graphics.fire_graphic,
  scale: 1,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.PROJECTILE_AI,
    detectionDistance: 200,
  },
}

export const ACID_BLAST = {
  graphic: graphics.acid_graphic,
  scale: 0.1,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.PROJECTILE_AI_2,
    detectionDistance: 200,
  },
}

export const LIGHTNING_BLAST = {
  graphic: graphics.lightning_graphic,
  scale: 3,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.PROJECTILE_AI_2,
    detectionDistance: 200,
  },
}

export const TALON_BLAST = {
  graphic: graphics.talon_graphic,
  scale: 1,
  color: '#FFFFFF',
  behaviour: {
    aiFunction: ais.PROJECTILE_AI_3,
    detectionDistance: 200,
  },
}
