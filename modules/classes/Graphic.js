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

  // draws the graphic to the canvas
  draw(aGameObject, display) {
    let pastCoordinate;
    let newCoordinate;

    // setup adjusted variables for relative camera
    let scaledGraphic = this.scaleGraphic(this.parts, (aGameObject.scale * display.worldScale));
    let adjustedPosition = rotateCoord([aGameObject.x - display.cameraX, aGameObject.y - display.cameraY, aGameObject.z], -1 * display.cameraR);
    let adjustedX = adjustedPosition[0] * display.worldScale;
    let adjustedY = adjustedPosition[1] * display.worldScale;
    let adjustedZ = adjustedPosition[2] * display.worldScale;
    let adjustedR = aGameObject.r - display.cameraR;

    // showing shields
    // context.globalAlpha = (typeof aGameObject.shield !== 'undefined' ? aGameObject.shield / aGameObject.shieldMax : 1);

    // draw the graphic
    for (let i = 0; i < scaledGraphic.length; i++) {
      let currentPart = scaledGraphic[i];
      let currentCoordinate = rotateCoord(currentPart[0], adjustedR);

      // actual drawing
      for (let ii = 0; ii < currentPart.length; ii++) {

        // find effective distance for perspective
        let cameraDistance  = display.cameraDistance;
        let relevantCameraX = display.cameraX - cameraDistance * Math.cos(Math.PI * -0.5 + display.cameraR);
        let relevantCameraY = display.cameraY - cameraDistance * Math.sin(Math.PI * -0.5 + display.cameraR);
        let relevantCameraZ =                   cameraDistance * Math.sin(Math.PI * 0.5 + display.cameraTilt);

        let physCoordinate = rotateCoord(this.parts[i][ii], aGameObject.r);

        let xDistance = aGameObject.x + (physCoordinate[0] * aGameObject.scale) - relevantCameraX;
        let yDistance = aGameObject.y + (physCoordinate[1] * aGameObject.scale) - relevantCameraY;
        let zDistance = aGameObject.z + (physCoordinate[2] * aGameObject.scale) - relevantCameraZ;

        let angleFromCameraHorizontal = (Math.PI * -0.5 + angleTo(xDistance, yDistance, 0 , 0)) - display.cameraR;
        let angleFromCameraVertical = Math.PI * 0.5 * (1 - display.cameraTilt);

        let horizontalDistance = pythagorean(xDistance, yDistance, 0, 0);
        let effectiveDistance = (Math.cos(angleFromCameraVertical) * Math.cos(angleFromCameraHorizontal) * horizontalDistance);
        effectiveDistance -= zDistance * Math.sin(angleFromCameraVertical)

        currentCoordinate = rotateCoord(currentPart[ii], adjustedR);
        let xCoord = adjustedX + currentCoordinate[0];

        xCoord *= (
          effectiveDistance > 0
          ? 1 / (1 + effectiveDistance * 0.008)
          : 1 + effectiveDistance * -0.008 // @Todo make accurate
        );

        xCoord += display.x0;
        let yCoord = display.yFactor * (adjustedY + currentCoordinate[1]);
        yCoord -= (adjustedZ + currentCoordinate[2]) * display.zFactor;

        yCoord *= (
          effectiveDistance > 0
          ? 1 / (1 + effectiveDistance * 0.008)
          : 1 + effectiveDistance * -0.008 // @Todo make accurate?
        );

        yCoord += display.y0;

        if (ii == 0 || effectiveDistance < 0) {
          newCoordinate = [xCoord, yCoord, effectiveDistance];
        } else {
          pastCoordinate = [newCoordinate[0], newCoordinate[1], newCoordinate[2]];
          newCoordinate = [xCoord, yCoord, effectiveDistance];
          display.toDraw[display.toDraw.length] = {
            x1: pastCoordinate[0],
            y1: pastCoordinate[1],
            x2: newCoordinate[0],
            y2: newCoordinate[1],
            distance: (newCoordinate[2] + pastCoordinate[2]) / 2,
            weight: this.lineWidth,
            color: aGameObject.color,
            alpha: (typeof aGameObject.shield !== 'undefined' ? aGameObject.shield / aGameObject.shieldMax : 1),
          };
        }
      }
    }

    // // draw text
    // if (display.debugMode) {
    //   // context.fillStyle = aGameObject.color;
    //   // context.font = "30px Arial";
    //   if ( typeof aGameObject.text !== 'undefined' ) {
    //     // context.fillText(
    //   //     aGameObject.text,
    //   //     display.x0 + adjustedX - 8,
    //   //     20 + (this.maxPoint * aGameObject.scale * display.worldScale) + display.y0 + (display.yFactor * adjustedY));
    //   // }
    // }
  }
}
