import { RN, rotateCoord } from '../mathExtention.js';
import { Graphic } from '../classes/Graphic.js';
import { MultiPartGraphic } from '../classes/MultiPartGraphic.js';
import * as parts from './partialGraphics.js';

let tower_generator = function(min, max) {
  let returnGraphic = [];

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

export const base_1_generator = function() {
  return tower_generator(4, 9);
}

// creates a grid graphic based on two parameters
export const grid_generator = function(squareSize, gridSize) {
  let gridGraphic = [];
  let lineLength = squareSize * (gridSize - 1);

  for (let i = -1 * gridSize; i < gridSize; i++) {
    for (let ii = -1 * gridSize; ii < gridSize; ii++) {
      gridGraphic[gridGraphic.length] = [[squareSize * i, squareSize * ii, 0], [squareSize * i, squareSize * (ii + 1), 0]];
      gridGraphic[gridGraphic.length] = [[squareSize * i, squareSize * ii, 0], [squareSize * (i + 1), squareSize * ii, 0]];

      if (i == gridSize - 1 || ii == gridSize - 1) {
        gridGraphic[gridGraphic.length] = [[squareSize * (i + 1), squareSize * ii, 0], [squareSize * (i + 1), squareSize * (ii + 1), 0]];
        gridGraphic[gridGraphic.length] = [[squareSize * i, squareSize * (ii + 1), 0], [squareSize * (i + 1), squareSize * (ii + 1), 0]];
      }
    }
  }

  return new Graphic(gridGraphic, 1);
}

// creates a grid graphic based on two parameters
export const radial_grid_generator = function(gridLines, gridDivisions) {
  let gridGraphic = [];
  let segmentArc = Math.PI * 2 / gridDivisions

  for (let i = 1; i < gridLines; i++) {
    for (let ii = 0; ii < gridDivisions; ii++) {
      let corner = rotateCoord([0, i, 0], segmentArc * ii);
      let line = rotateCoord([0, (i + 1), 0], segmentArc * ii);
      let arc = rotateCoord([0, i, 0], segmentArc * (ii + 1));

      gridGraphic[gridGraphic.length] = [corner, line];
      gridGraphic[gridGraphic.length] = [corner, arc];
    }
  }

  return new Graphic(gridGraphic, 1);
}
