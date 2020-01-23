import {
  rotateCoord,
  pythagorean,
  angleTo,
} from '../mathExtention.js';

export class Graphic {
  constructor(parts, lineWidth) {
    this.parts = parts;
    this.lineWidth = lineWidth;

    this.maxPoint = this.findMaxPoint();
  }

  // finds the highest number in the graphic
  findMaxPoint () {
    let returnNumber = 0;
    for (let i = 0; i < this.parts.length; i++) {
      for (let ii = 0; ii < this.parts[i].length; ii++) {
        let coordinate = this.parts[i][ii];
        if (coordinate[0] > returnNumber) { returnNumber = coordinate[0]; }
        if (coordinate[1] > returnNumber) { returnNumber = coordinate[1]; }
      }
    }

    return returnNumber;
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

  // finds the  distance from the camera for perspective factors
  findEffectiveDistance(display, aGameObject, part) {
    // find effective distance for perspective
    let cameraDistance  = display.cameraDistance;
    let relevantCameraX = display.cameraX - cameraDistance * Math.cos(Math.PI * -0.5 + display.cameraR);
    let relevantCameraY = display.cameraY - cameraDistance * Math.sin(Math.PI * -0.5 + display.cameraR);
    let relevantCameraZ =                   cameraDistance * Math.sin(Math.PI * 0.5 + display.cameraTilt);

    let physCoordinate = rotateCoord(part, aGameObject.r);

    let xDistance = aGameObject.x + (physCoordinate[0] * aGameObject.scale) - relevantCameraX;
    let yDistance = aGameObject.y + (physCoordinate[1] * aGameObject.scale) - relevantCameraY;
    let zDistance = aGameObject.z + (physCoordinate[2] * aGameObject.scale) - relevantCameraZ;

    let angleFromCameraHorizontal = (Math.PI * -0.5 + angleTo(xDistance, yDistance, 0 , 0)) - display.cameraR;
    let angleFromCameraVertical = Math.PI * 0.5 * (1 - display.cameraTilt);

    let horizontalDistance = pythagorean(xDistance, yDistance, 0, 0);
    let effectiveDistance = (Math.cos(angleFromCameraVertical) * Math.cos(angleFromCameraHorizontal) * horizontalDistance);
    effectiveDistance -= zDistance * Math.sin(angleFromCameraVertical);

    return effectiveDistance;
  }

  // draws the graphic to the canvas
  draw(aGameObject, display) {
    let pastCoordinate, newCoordinate; // vars for line ends

    // setup adjusted variables for relative camera position
    let scaledGraphic = this.scaleGraphic(this.parts, (aGameObject.scale * display.worldScale));
    let adjustedPosition = rotateCoord([aGameObject.x - display.cameraX, aGameObject.y - display.cameraY, aGameObject.z], -1 * display.cameraR);
    let adjustedX = adjustedPosition[0] * display.worldScale;
    let adjustedY = adjustedPosition[1] * display.worldScale;
    let adjustedZ = adjustedPosition[2] * display.worldScale;
    let adjustedR = aGameObject.r - display.cameraR;

    // generate the lines
    for (let i = 0; i < scaledGraphic.length; i++) {
      for (let ii = 0; ii < scaledGraphic[i].length; ii++) {
        let effectiveDistance = this.findEffectiveDistance(display, aGameObject, this.parts[i][ii]);
        let currentCoordinate = rotateCoord(scaledGraphic[i][ii], adjustedR);

        // calculate the two coordinates
        let xCoord = adjustedX + currentCoordinate[0];
        xCoord *= 1 / (1 + effectiveDistance * 0.008); // @Todo make accurate?
        xCoord += display.x0;

        let yCoord = display.yFactor * (adjustedY + currentCoordinate[1]);
        yCoord -= (adjustedZ + currentCoordinate[2]) * display.zFactor;
        yCoord *= 1 / (1 + effectiveDistance * 0.008); // @Todo make accurate?
        yCoord += display.y0;

        // if on screen, return the line to display
        if (ii == 0 || effectiveDistance < 0) {
          newCoordinate = [xCoord, yCoord, effectiveDistance];
        } else {
          pastCoordinate = [newCoordinate[0], newCoordinate[1], newCoordinate[2]];
          newCoordinate = [xCoord, yCoord, effectiveDistance];

          // format line for display
          display.toDraw[display.toDraw.length] = {
            x1: pastCoordinate[0],
            y1: pastCoordinate[1],
            x2: newCoordinate[0],
            y2: newCoordinate[1],
            distance: (newCoordinate[2] + pastCoordinate[2]) / 2,
            weight: this.lineWidth,
            color: aGameObject.color,
            alpha: aGameObject.alpha,
          };
        }
      }
    }
  }
}
