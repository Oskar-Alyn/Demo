import { Graphic } from '../classes/Graphic.js';

export const fighter_1_graphic = new Graphic([
  [[20, 0, 0], [0, 0, 5], [-10, 0, 0], [0, 0, -5], [20, 0, 0]], // front to back shell
  [[0, 10, 0], [0, 0, 5], [0, -10, 0], [0, 0, -5], [0, 10, 0]], // side to side shell
  [[20, 0, 0], [0, 10, 0], [-10, 0, 0], [0, -10,  0], [20, 0, 0]], // flat shell
], 2);

export const base_1_graphic = new Graphic([
  [[40, 100, 0], [100, 40, 0], [100, -40, 0], [40, -100, 0], [-40, -100, 0], [-100, -40, 0], [-100, 40, 0], [-40, 100, 0], [40, 100, 0]], // outermost octogon
  [[20, 50, 50], [50, 20, 50], [50, -20, 50], [20, -50, 50], [-20, -50, 50], [-50, -20, 50], [-50, 20, 50], [-20, 50, 50], [20, 50, 50]], // top octogon
  [[20, 50, -50], [50, 20, -50], [50, -20, -50], [20, -50, -50], [-20, -50, -50], [-50, -20, -50], [-50, 20, -50], [-20, 50, -50], [20, 50, -50]], // bottom octogon

  // TODO: add connecting lines for the base

  // [[40, 100], [20, 50]], //connecting line
  // [[100, 40], [50, 20]], //connecting line
  // [[100, -40], [50, -20]], //connecting line
  // [[40, -100], [20, -50]], //connecting line
  // [[-40, -100], [-20, -50]], //connecting line
  // [[-100, -40], [-50, -20]], //connecting line
  // [[-100, 40], [-50, 20]], //connecting line
  // [[-40, 100], [-20, 50]], //connecting line
], 2);

export const basic_laser = new Graphic([
  [[5, 0, 0], [-5, 0, 0]], // laser
], 3);

// TODO: 3d-ify all the graphics below

export const turret_1_graphic = new Graphic([
  [[5, 5], [15, 5]], // detail front
  [[-5, 5], [-15, 5]], // detail front
  [[-5, -5], [-15, -15]], // detail back
  [[5, -5], [15, -15]], // detail back
  [[5, 35], [5, -5], [-5, -5], [-5, 35], [5, 35]], // turret rectangle
  [[5, 15], [15, 5], [15, -15], [-15, -15], [-15, 5], [-5, 15]], // outer layer
]);

export const credit_graphic = new Graphic([
  [[-4, -2], [0, 2], [4, -2]], // inside
  [[2, 4], [6, 0], [6, -4], [-6, -4], [-6, 4], [2, 4]], // outer layer
]);
