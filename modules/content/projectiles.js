import * as graphics from './projectileGraphics.js';
import * as ais from './ais.js';

export const BASIC_LASER = {
  graphic: graphics.basic_laser_graphic,
  scale: 2,
  damage: 1,
}

export const SKIRMISHER_LASER = {
  graphic: graphics.basic_laser_graphic,
  scale: 4,
  damage: 2,
}

export const HEAVY_LASER = {
  graphic: graphics.heavy_laser_graphic,
  damage: 7,
}

export const FIRE_BLAST = {
  graphic: graphics.fire_graphic,
  damage: 1,
}

export const ACID_BLAST = {
  graphic: graphics.acid_graphic,
  scale: 0.1,
  damage: 2,
}

export const LIGHTNING_BLAST = {
  graphic: graphics.lightning_graphic,
  scale: 3,
  damage: 2,
}

export const TALON_BLAST = {
  graphic: graphics.talon_graphic,
  damage: 4,
}
