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
    shieldMax: 100,
    shieldRegen: 10,
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
    shieldMax: 19,
    shieldRegen: 10,
    weapon: weapons.FIGHTER_2_WEAPON,
    drop: objects.CREDIT,
};

export const SKIRMISHER_1 = {
    graphic: graphics.winged_1_graphic,
    scale: 2,
    speed: 0.026,
    rotationSpeed: 0.0016,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 7,
    shieldRegen: 20,
    weapon: weapons.SKIRMISHER_1_WEAPON,
    drop: objects.CREDIT,
};

export const HEAVY_1 = {
    graphic: graphics.winged_1_graphic,
    scale: 3,
    speed: 0.024,
    rotationSpeed: 0.0012,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 15,
    shieldRegen: 20,
    weapon: weapons.HEAVY_1_WEAPON,
    drop: objects.CREDIT,
};

export const FIREBEAST_1 = {
    graphic: graphics.beast_1_graphic,
    scale: 0.4,
    speed: 0.02,
    rotationSpeed: 0.002,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 7,
    shieldRegen: 26,
    weapon: weapons.FIRE_1_WEAPON,
    drop: objects.CREDIT,
};

export const ACIDBEAST_1 = {
    graphic: graphics.beast_2_graphic,
    scale: 1.6,
    speed: 0.03,
    rotationSpeed: 0.001,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 27,
    shieldRegen: 12,
    weapon: weapons.ACID_1_WEAPON,
    drop: objects.CREDIT,
};

export const LIGHTNINGBEAST_1 = {
    graphic: graphics.beast_2_graphic,
    scale: 0.5,
    speed: 0.02,
    rotationSpeed: 0.0015,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 13,
    shieldRegen: 20,
    weapon: weapons.LIGHTNING_1_WEAPON,
    drop: objects.CREDIT,
};

export const TALONBEAST_1 = {
    graphic: graphics.beast_3_graphic,
    scale: 1,
    speed: 0.026,
    rotationSpeed: 0.0014,
    aiType: {
      aiFunction: ais.FIGHTER_AI,
      detectionDistance: 200,
    },
    shieldMax: 15,
    shieldRegen: 16,
    weapon: weapons.TALON_1_WEAPON,
    drop: objects.CREDIT,
};
