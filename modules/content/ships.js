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
    shieldRegen: 20,
    weapon: null,
    drop: objects.CREDIT,
};

export const FIGHTER_1 = {
    graphic: graphics.fighter_1_graphic,
    scale: 1.5,
    speed: 0.018,
    rotationSpeed: 0.0015,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 3,
    shieldRegen: 30,
    weapon: weapons.FIGHTER_1_WEAPON,
    drop: objects.CREDIT,
};

export const FIGHTER_2 = {
    graphic: graphics.fighter_2_graphic,
    scale: 2.5,
    speed: 0.024,
    rotationSpeed: 0.0015,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 13,
    shieldRegen: 10,
    weapon: weapons.FIGHTER_2_WEAPON,
    drop: objects.CREDIT,
};

export const MULTIPART = {
    graphic: graphics.test_multi_ship,
    scale: 4,
    speed: 0.006,
    rotationSpeed: 0.0005,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 500,
    },
    shieldMax: 15,
    shieldRegen: 30,
    weapon: weapons.FIGHTER_1_WEAPON,
    drop: objects.CREDIT,
};
