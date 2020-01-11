import { Graphic } from '../classes/Graphic.js';

export const fighter_1_graphic = new Graphic([
  [[0, -2, 0], [0, 0, 0.5], [0, 1, 0], [0, 0, -0.5], [0, -2, 0]], // front to back shell
  [[1, 0, 0], [0, 0, 0.5], [-1, 0, 0], [0, 0, -0.5], [1, 0, 0]], // side to side shell
  [[0, -2, 0], [1, 0, 0], [0, 1, 0], [-1, 0,  0], [0, -2, 0]], // flat shell
], 2);

export const base_1_graphic = new Graphic([
  [[4, 10, 0], [10, 4, 0], [10, -4, 0], [4, -10, 0], [-4, -10, 0], [-10, -4, 0], [-10, 4, 0], [-4, 10, 0], [4, 10, 0]], // outermost octogon
  [[2, 5, 5], [5, 2, 5], [5, -2, 5], [2, -5, 5], [-2, -5, 5], [-5, -2, 5], [-5, 2, 5], [-2, 5, 5], [2, 5, 5]], // top octogon
  [[2, 5, -5], [5, 2, -5], [5, -2, -5], [2, -5, -5], [-2, -5, -5], [-5, -2, -5], [-5, 2, -5], [-2, 5, -5], [2, 5, -5]], // bottom octogon

  [[2, 5, -5], [4, 10, 0], [2, 5, 5]], //connecting line
  [[5, 2, -5], [10, 4, 0], [5, 2, 5]], //connecting line
  [[5, -2, -5], [10, -4, 0], [5, -2, 5]], //connecting line
  [[2, -5, -5], [4, -10, 0], [2, -5, 5]], //connecting line
  [[-2, -5, -5], [-4, -10, 0], [-2, -5, 5]], //connecting line
  [[-5, -2, -5], [-10, -4, 0], [-5, -2, 5]], //connecting line
  [[-5, 2, -5], [-10, 4, 0], [-5, 2, 5]], //connecting line
  [[-2, 5, -5], [-4, 10, 0], [-2, 5, 5]], //connecting line
], 2);

// TODO: 3d-ify all the graphics below, and rescale

export const turret_1_graphic = new Graphic([
  [[5, 5], [15, 5]], // detail front
  [[-5, 5], [-15, 5]], // detail front
  [[-5, -5], [-15, -15]], // detail back
  [[5, -5], [15, -15]], // detail back
  [[5, 35], [5, -5], [-5, -5], [-5, 35], [5, 35]], // turret rectangle
  [[5, 15], [15, 5], [15, -15], [-15, -15], [-15, 5], [-5, 15]], // outer layer
]);
