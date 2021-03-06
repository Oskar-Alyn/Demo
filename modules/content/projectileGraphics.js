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

export const fire_graphic = new Graphic([
  [[-0.6, 1, 0], [0, -1, 0], [0.6, 1, 0]],
  [[0, 1, -0.6], [0, -1, 0], [0, 1, 0.6]],
], 4);

export const acid_graphic = new Graphic([
  [[4, 10, 0], [10, 4, 0], [10, -4, 0], [4, -10, 0], [-4, -10, 0], [-10, -4, 0], [-10, 4, 0], [-4, 10, 0], [4, 10, 0]], // outermost octogon
  [[2, 5, 5], [5, 2, 5], [5, -2, 5], [2, -5, 5], [-2, -5, 5], [-5, -2, 5], [-5, 2, 5], [-2, 5, 5], [2, 5, 5]], // top octogon
  [[2, 5, -5], [5, 2, -5], [5, -2, -5], [2, -5, -5], [-2, -5, -5], [-5, -2, -5], [-5, 2, -5], [-2, 5, -5], [2, 5, -5]], // bottom octogon
], 2);

export const lightning_graphic = new Graphic([
  [[0, 0.5, 0], [0.1, 0, 0], [-0.1, 0, 0], [0, -0.5, 0]],
], 4);

export const talon_graphic = new Graphic([
  [[-0.6, 2, 0], [0, -2, 0], [0.6, 2, 0]],
  [[0, 2, -0.6], [0, -2, 0], [0, 2, 0.6]],
], 4);
