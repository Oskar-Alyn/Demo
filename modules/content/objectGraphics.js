import { Graphic } from '../classes/Graphic.js';

export const basic_laser_graphic = new Graphic([
  [[0, 0.5, 0], [0, -0.5, 0]], // laser
], 4);

export const heavy_laser_graphic = new Graphic([
  [[0, 2, 0.25], [0, -2, 0.25]],
  [[0, 2, -0.25], [0, -2, -0.25]],
  [[0.25, 2, 0], [0.25, -2, 0]],
  [[-0.25, 2, 0], [-0.25, -2, 0]],
], 4);

export const credit_graphic = new Graphic([
  [[-0.5, 0, -0.25], [-0.5, 0, 0.25], [0.5, 0, 0.25], [0.5, 0, -0.25], [-0.5, 0, -0.25]], // Square
], 2);

// Old credit model
// export const credit_graphic = new Graphic([
//   [[-4, -2], [0, 2], [4, -2]], // inside
//   [[2, 4], [6, 0], [6, -4], [-6, -4], [-6, 4], [2, 4]], // outer layer
// ]);
