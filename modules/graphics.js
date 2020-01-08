import { VERTICAL_SHIFT } from './globalConstants.js';

export class graphic {
  constructor(parts) {
    this.parts = parts;
  }

  // change radians to degrees and vice versa
  toDegrees(radians) {
    return (radians / 3.14159 * 180);
  }
  toRadians(degrees) {
    return (degrees * 3.14159 / 180);
  }

  // does the trigonometry to rotate a coordinate
  rotateCoord(coord, rotation) {
    // get cartesian coordinates
    let x = coord[0];
    let y = coord[1];

    // check for invalid coordinates
    if (x == 0 && y == 0) {
      return coord;
    }

    // convert to polar coordinates
    let r = Math.sqrt((x * x) + (y * y));
    let t = Math.atan(y / x);
    if (x < 0) { t += 3.14159 }

    // add rotation
    t += rotation;

    // convert back to cartesian coordinates
    x = r * Math.cos(t);
    y = r * Math.sin(t);

    return [x, y, coord[2]];
  }

  // scales graphic to scale number
  scaleGraphic(graphicToScale, scaler) {
    let returnGraphic = [];
    for (let i = 0; i < this.parts.length; i++) {
      returnGraphic[i] = [];
      for (let ii = 0; ii < this.parts[i].length; ii++) {
        let coordinate = this.parts[i][ii];
        returnGraphic[i][ii] = [coordinate[0] * scaler, coordinate[1] * scaler, coordinate[2] * scaler];
      }
    }

    return returnGraphic
  }

  // draws the graphic to the canvas
  draw(aGameObject, canvasContext) {
    let scaledGraphic = this.scaleGraphic(this.parts, aGameObject.scale);
    for (let i = 0; i < scaledGraphic.length; i++) {
      let context = canvasContext;
      let currentPart = scaledGraphic[i];
      let currentCoordinate = this.rotateCoord(currentPart[0], aGameObject.r);

      context.strokeStyle = aGameObject.color;
      context.beginPath();

      for (let ii = 0; ii < currentPart.length; ii++) {
        currentCoordinate = this.rotateCoord(currentPart[ii], aGameObject.r);
        let xCoord = aGameObject.x + currentCoordinate[0];
        let yCoord = VERTICAL_SHIFT * (aGameObject.y + currentCoordinate[1]) - currentCoordinate[2];

        if (ii == 0) {
          context.moveTo(xCoord, yCoord);
        } else {
          context.lineTo(xCoord, yCoord);
        }
      }
      context.stroke();
    }
  }
}
