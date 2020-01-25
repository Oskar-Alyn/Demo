import { rotateCoord, rollCoord } from '../mathExtention.js';

export class MultiPartGraphic {
  constructor (parts) {
    this.parts = parts;
    this.maxPoint = this.findMaxPoint();
  }

  // finds the highest number in the graphic
  findMaxPoint () {
    let returnNumber = 0;
    for (let i = 0; i < this.parts.length; i++) {
      if (this.parts[i].graphic.maxPoint > returnNumber) {
        returnNumber = this.parts[i].graphic.maxPoint;
      }
    }

    return returnNumber;
  }

  draw (obj, display) {
    for (let i = 0; i < this.parts.length; i++) {
      let part = this.parts[i]

      let x = (typeof part.x == 'undefined' ? 0 : part.x * obj.scale);
      let y = (typeof part.y == 'undefined' ? 0 : part.y * obj.scale);
      let z = (typeof part.z == 'undefined' ? 0 : part.z * obj.scale);
      let yaw = obj.yaw;
      let roll = obj.roll;
      let pitch = obj.pitch;

      let scale = (typeof part.scale == 'undefined' ? obj.scale : part.scale * obj.scale);

      let position = rollCoord([x, y, z], roll);
      position = rotateCoord(position, yaw);

      x = obj.x + position[0];
      y = obj.y + position[1];
      z = obj.z + position[2];

      yaw = (typeof part.yaw == 'undefined' ? obj.yaw : obj.yaw + part.yaw);
      roll = (typeof part.roll == 'undefined' ? obj.roll : obj.roll + part.roll);

      part.graphic.draw({
        x: x, y: y, z: z,
        yaw: yaw, roll: roll, pitch: pitch,

        color: obj.color,
        scale: scale,
        alpha: obj.alpha,

      }, display);
    }
  }
}
