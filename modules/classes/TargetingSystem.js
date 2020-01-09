import { pythagorean } from '../mathExtention.js';

export class TargetingSystem {
  constructor () {

  }

  run (game) {
    let objects = game.gameLoop.objectsToRun;

    for (let i = 0; i < objects.length; i++) {
      if (typeof(objects[i].behaviour) == 'object' && objects[i].behaviour !== null) {

        for (let ii = i + 1; ii < objects.length; ii++) {
          if (typeof(objects[ii].behaviour) == 'object' && objects[ii].behaviour !== null) {

            // check team affiliation
            if (objects[i].color !== objects[ii].color) {

              // find distance between the two objects
              let distance = pythagorean(objects[i].x, objects[i].y, objects[ii].x, objects[ii].y);

              // check for bad matches
              if (i == ii) {
                console.log('Error: Bad target system math');
              } else if (objects[i] == objects[ii]) {
                console.log('Error: Double registered object');
              }

              // set targets for both objects
              if (distance < objects[i].behaviour.targetDistance && typeof objects[ii].team !== 'undefined') {
                objects[i].behaviour.targetDistance = distance;
                objects[i].behaviour.aiTarget = objects[ii];
              }
              if (distance < objects[ii].behaviour.targetDistance && typeof objects[i].team !== 'undefined') {
                objects[ii].behaviour.targetDistance = distance;
                objects[ii].behaviour.aiTarget = objects[i];
              }
            }

          }
        }
      }
    }
  }
}
