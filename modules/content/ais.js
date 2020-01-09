import { Ai } from '../classes/Ai.js';

export const BASE_AI = new Ai(function(aShip) {
  aShip.turningLeft = true;
});

export const LASER_AI = new Ai(function(aShip) {
  aShip.movingForward = true;
});

export const FIGHTER_AI = new Ai(function(aShip) {
  aShip.movingForward = true;
});
