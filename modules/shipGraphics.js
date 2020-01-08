import { graphic } from './graphics.js';

export const fighter_1_graphic = new graphic([
  [[20, 0], [-10, 0]], // inside cross
  [[0, 10], [0, -10]], // inside cross
  [[20, 0], [0, 10], [-10, 0], [0, -10], [20, 0]], // outer layer
]);

export const base_1_graphic = new graphic([
  [[40, 100], [100, 40], [100, -40], [40, -100], [-40, -100], [-100, -40], [-100, 40], [-40, 100], [40, 100]], // outer octogon
  [[20, 50], [50, 20], [50, -20], [20, -50], [-20, -50], [-50, -20], [-50, 20], [-20, 50], [20, 50]], // inner octogon
  [[40, 100], [20, 50]], //connecting line
  [[100, 40], [50, 20]], //connecting line
  [[100, -40], [50, -20]], //connecting line
  [[40, -100], [20, -50]], //connecting line
  [[-40, -100], [-20, -50]], //connecting line
  [[-100, -40], [-50, -20]], //connecting line
  [[-100, 40], [-50, 20]], //connecting line
  [[-40, 100], [-20, 50]], //connecting line
]);

export const turret_1_graphic = new graphic([
  [[5, 5], [15, 5]], // detail front
  [[-5, 5], [-15, 5]], // detail front
  [[-5, -5], [-15, -15]], // detail back
  [[5, -5], [15, -15]], // detail back
  [[5, 35], [5, -5], [-5, -5], [-5, 35], [5, 35]], // turret rectangle
  [[5, 15], [15, 5], [15, -15], [-15, -15], [-15, 5], [-5, 15]], // outer layer
]);

export const credit_graphic = new graphic([
  [[-4, -2], [0, 2], [4, -2]], // inside
  [[2, 4], [6, 0], [6, -4], [-6, -4], [-6, 4], [2, 4]], // outer layer
]);
