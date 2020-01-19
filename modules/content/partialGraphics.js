import { Graphic } from '../classes/Graphic.js';

export const box_graphic_test = new Graphic([  // the center is at the back of the segment one up from the bottom of the graphic
  [[-1, 2, -1], [1, 2, -1], [1, -2, -1], [-1, -2, -1], [-1, 2, -1]], // bottom outline
  [[-1, 2, 1], [1, 2, 1], [1, -2, 1], [-1, -2, 1], [-1, 2, 1]], // top outline

  [[-1, 2, -1], [-1, 2, 1]],
  [[1, 2, -1], [1, 2, 1]],
  [[1, -2, -1], [1, -2, 1]],
  [[-1, -2, -1], [-1, -2, -1]],
], 2);

export const front_graphic_test = new Graphic([
  [[-1, -1, -1], [0, 1, -1], [1, -1, -1], [-1, -1, -1]], // bottom outline
  [[-1, -1, 1], [0, 1, 1], [1, -1, 1], [-1, -1, 1]], // top outline
  // [[-1, -1, -1], [-1, -1, 1]],
  [[0, 1, -1], [0, 1, 1]],
  // [[1, -1, -1], [1, -1, 1]],
], 2);

export const base_room = new Graphic([
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

export const base_hall = new Graphic([
  [[2, 5, -5], [2, 5, 5]], //connecting line
  [[5, 2, -5], [5, 2, 5]], //connecting line
  [[5, -2, -5], [5, -2, 5]], //connecting line
  [[2, -5, -5], [2, -5, 5]], //connecting line
  [[-2, -5, -5], [-2, -5, 5]], //connecting line
  [[-5, -2, -5], [-5, -2, 5]], //connecting line
  [[-5, 2, -5], [-5, 2, 5]], //connecting line
  [[-2, 5, -5], [-2, 5, 5]], //connecting line
], 2);

export const base_ring = new Graphic([
  [[4, 10, 0], [10, 4, 0], [10, -4, 0], [4, -10, 0], [-4, -10, 0], [-10, -4, 0], [-10, 4, 0], [-4, 10, 0], [4, 10, 0]], // outermost octogon

  [[2, 5, -5], [2, 5, 5]], //connecting line
  [[5, 2, -5], [5, 2, 5]], //connecting line
  [[5, -2, -5], [5, -2, 5]], //connecting line
  [[2, -5, -5], [2, -5, 5]], //connecting line
  [[-2, -5, -5], [-2, -5, 5]], //connecting line
  [[-5, -2, -5], [-5, -2, 5]], //connecting line
  [[-5, 2, -5], [-5, 2, 5]], //connecting line
  [[-2, 5, -5], [-2, 5, 5]], //connecting line
], 2);
