import { Graphic } from '../classes/Graphic.js';
import { MultiPartGraphic } from '../classes/MultiPartGraphic.js';
import * as parts from './partialGraphics.js';

export const credit_graphic = new Graphic([
  [[-0.5, 0, -0.25], [-0.5, 0, 0.25], [0.5, 0, 0.25], [0.5, 0, -0.25], [-0.5, 0, -0.25]], // Square
], 2);

export const sun_graphic = new MultiPartGraphic([
  // r needs to be initialized for spin
  {graphic: parts.icosahedron, r: 0},
  {graphic: parts.hexagon, scale: 2.5, r: 0},
  {graphic: parts.hexagon, scale: 3.0, r: 0},
  {graphic: parts.hexagon, scale: 3.5, r: 0},
]);
