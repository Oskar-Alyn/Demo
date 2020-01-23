import { RN } from '../mathExtention.js';
import { MultiPartGraphic } from '../classes/MultiPartGraphic.js';
import * as parts from './partialGraphics.js';

export const tower_generator = function() {
  let returnGraphic = [];

  let min = 12;
  let max = 20;

  for (let i = -1 * RN(min, max); i <= RN(min, max); i++) {
    returnGraphic[returnGraphic.length] = {
      z: i * 10,
      graphic: parts.base_room,
    }

    // add halls, but not at 0
    if (RN(0, 1) == 0 && i !== 0) {
      returnGraphic[returnGraphic.length - 1].graphic = parts.base_hall
      if (RN(0, 1) == 0) {
        returnGraphic[returnGraphic.length - 1].graphic = parts.base_ring
      }
    }
  }

  // make ends always rooms
  returnGraphic[0].graphic = parts.base_room
  returnGraphic[returnGraphic.length - 1].graphic = parts.base_room

  return new MultiPartGraphic(returnGraphic);;
}
