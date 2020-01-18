import { Graphic } from '../classes/Graphic.js';
import { MultiPartGraphic } from '../classes/MultiPartGraphic.js';
import * as parts from './partialGraphics.js';

export const fighter_1_graphic = new Graphic([
  [[0, -2, 0], [0, 0, 0.5], [0, 1, 0], [0, 0, -0.5], [0, -2, 0]], // front to back shell
  [[1, 0, 0], [0, 0, 0.5], [-1, 0, 0], [0, 0, -0.5], [1, 0, 0]], // side to side shell
  [[0, -2, 0], [1, 0, 0], [0, 1, 0], [-1, 0,  0], [0, -2, 0]], // flat shell
], 2);

export const fighter_2_graphic = new Graphic([
  [[0, -2, 0], [0, 0, 0.5], [0, 1, 0], [0, 0, -0.5], [0, -2, 0]], // front to back shell
  [[2.5, 3, 0], [0, 0, 0.5], [-2.5, 3, 0], [0, 0, -0.5], [2.5, 3, 0]], // side to side shell
  [[0, -2, 0], [2.5, 3, 0], [0, 1, 0], [-2.5, 3,  0], [0, -2, 0]], // flat shell
], 2);

export const base_1_graphic = new MultiPartGraphic([
  {graphic: parts.base_room, z:  40},
  {graphic: parts.base_room, z:  30},
  {graphic: parts.base_room, z:  20},
  {graphic: parts.base_room, z:  10},
  {graphic: parts.base_room, z:   0},
  {graphic: parts.base_room, z: -10},
  {graphic: parts.base_room, z: -20},
  {graphic: parts.base_room, z: -30},
  {graphic: parts.base_room, z: -40},
]);

// TODO: 3d-ify all the graphics below, and rescale

export const test_multi_ship = new MultiPartGraphic([
  {graphic: parts.box_graphic_test},
  {graphic: parts.front_graphic_test, y: -3, r: Math.PI * 1},
]);

export const turret_1_graphic = new Graphic([
  [[5, 5], [15, 5]], // detail front
  [[-5, 5], [-15, 5]], // detail front
  [[-5, -5], [-15, -15]], // detail back
  [[5, -5], [15, -15]], // detail back
  [[5, 35], [5, -5], [-5, -5], [-5, 35], [5, 35]], // turret rectangle
  [[5, 15], [15, 5], [15, -15], [-15, -15], [-15, 5], [-5, 15]], // outer layer
], 2);
