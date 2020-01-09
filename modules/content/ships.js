import * as graphics from './shipGraphics.js';
import * as weapons from './weapons.js';
import * as ais from './ais.js';

export const BASE_1 = {
    graphic: graphics.base_1_graphic,
    scale: 1,
    speed: 0,
    rotationSpeed: 0.0001,
    aiType: {
      aiFunction: ais.BASE_AI,
      detectionDistance: 1,
    },
    weapon: null,
};

export const FIGHTER_1 = {
    graphic: graphics.fighter_1_graphic,
    scale: 1,
    speed: 0.5,
    rotationSpeed: 0.01,
    aiType: ais.FIGHTER_AI,
    weapon: weapons.FIGHTER_1_WEAPON,
};

export const BASIC_LASER = {
    graphic: graphics.basic_laser,
    scale: 1,
    speed: 2,
    rotationSpeed: 0,
    aiType: ais.LASER_AI,
    weapon: null,
};
