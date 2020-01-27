import { Graphic } from './Graphic.js';
import { RN } from '../mathExtention.js'

export class StarField extends Graphic {
  constructor(stars, size) {
    let parts = [];
    for (let i = 0; i < stars; i++) {
      parts[parts.length] = [RN(-100, 100) / 100, RN(-100, 100) / 100, RN(-100, 100) / 100];
    }

    super(parts, size);

    this.starMap = parts; // deep clone TODO
    this.currentStar;

    this.updateStarDisplay(0);
  }

  updateStarDisplay( currentStar ) {
    this.currentStar = this.starMap[currentStar];

    // modify field to draw right
    let newField = [];

    for (let i = 0; i < this.starMap.length; i++) {
      let star = this.starMap[i];
      if (star !== this.currentStar) {

        // find angles and use fixed distance

        newField[newField.length] = [
          [star[0] * 40000, star[1] * 40000, star[2] * 40000],
          [star[0] * 40000, (star[1] * 40000) + 8, (star[2] * 40000) + 8],
        ];
      }
    }

    this.parts = newField;
  }
}
