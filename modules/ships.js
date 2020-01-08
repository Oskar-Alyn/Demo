import * as graphics from './shipGraphics.js';
import { ship } from './ship.js';
import * as ais from './ais.js';
import { ai } from './ai.js';

export const BASE_1 = new ship(
    graphics.base_1_graphic,
    '#00FFFF',
    1,
    0,
    0.0002,
    new ai(ais.BASE_AI),
);

export const FIGHTER_1 = new ship(
    graphics.fighter_1_graphic,
    '#00FFFF',
    1,
    0.5,
    0.01,
    new ai(ais.NULL_AI),
);
