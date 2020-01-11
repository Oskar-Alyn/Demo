import * as graphics from './shipGraphics.js';
import * as objects from './objects.js'
import * as weapons from './weapons.js';
import * as ais from './ais.js';

export const BASE_1 = {
    graphic: graphics.base_1_graphic,
    scale: 2,
    speed: 0,
    rotationSpeed: 0.0001,
    aiType: {
      aiFunction: ais.BASE_AI,
      detectionDistance: 1,
    },
    shieldMax: 50,
    weapon: null,
    drop: objects.CREDIT,
};

export const FIGHTER_1 = {
    graphic: graphics.fighter_1_graphic,
    scale: 1.5,
    speed: 0.02,
    rotationSpeed: 0.0015,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 3,
    weapon: weapons.FIGHTER_1_WEAPON,
    drop: objects.CREDIT,
};
