import { rotateCoord } from '../mathExtention.js';

export class Graphic {
  constructor(parts, lineWidth) {
    this.parts = parts;
    this.lineWidth = lineWidth;
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
  draw(aGameObject, display) {
    let scaledGraphic = this.scaleGraphic(this.parts, (aGameObject.scale * display.worldScale));
    let adjustedPosition = rotateCoord([aGameObject.x - display.cameraX, aGameObject.y - display.cameraY], -1 * display.cameraR);
    let adjustedX = adjustedPosition[0] * display.worldScale;
    let adjustedY = adjustedPosition[1] * display.worldScale;
    let adjustedR = aGameObject.r - display.cameraR + (3.14159 * 2);

    for (let i = 0; i < scaledGraphic.length; i++) {
      let context = display.context;
      let currentPart = scaledGraphic[i];
      let currentCoordinate = rotateCoord(currentPart[0], adjustedR);

      context.strokeStyle = aGameObject.color;
      context.lineWidth = this.lineWidth;
      context.beginPath();

      for (let ii = 0; ii < currentPart.length; ii++) {
        currentCoordinate = rotateCoord(currentPart[ii], adjustedR);
        let xCoord = display.x0 + adjustedX + currentCoordinate[0];
        let yCoord = display.y0;
        yCoord += (display.yFactor * (adjustedY + currentCoordinate[1]));
        yCoord -= (currentCoordinate[2] * display.zFactor);

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
