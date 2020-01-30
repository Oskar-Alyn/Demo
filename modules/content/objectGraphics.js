import { RN } from '../mathExtention.js';
import { Graphic } from '../classes/Graphic.js';
import { MultiPartGraphic } from '../classes/MultiPartGraphic.js';
import * as parts from './partialGraphics.js';

export const credit_graphic = new Graphic([
  [[-0.5, 0, -0.25], [-0.5, 0, 0.25], [0.5, 0, 0.25], [0.5, 0, -0.25], [-0.5, 0, -0.25]], // Square
], 2);

export const sun_graphic = new MultiPartGraphic([
  // yaw needs to be initialized for spin
  {graphic: parts.icosahedron,         yaw: RN(0,62) / 10, roll: RN(0,62) / 10},
  {graphic: parts.hexagon, scale: 2.5, yaw: RN(0,62) / 10, roll: RN(0,62) / 10},
  {graphic: parts.hexagon, scale: 3.0, yaw: RN(0,62) / 10, roll: RN(0,62) / 10},
  {graphic: parts.hexagon, scale: 3.5, yaw: RN(0,62) / 10, roll: RN(0,62) / 10},
]);
