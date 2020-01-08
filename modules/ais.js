import { ai } from './ai.js';

export const NULL_AI = new ai(function(aShip) {

});

export const BASE_AI = new ai(function(aShip) {
  aShip.turningLeft = true;
});

export const LASER_AI = new ai(function(aShip) {
  aShip.movingForward = true;
});
