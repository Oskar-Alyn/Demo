import { RN, rotateCoord, angleTo } from '../mathExtention.js'
import { Ship } from './Ship.js';
import { GameObject } from './GameObject.js';

export class Spawner {
  constructor (template, edgeDistance, team) {
    this.frequency = template.frequency;
    this.frequencyNormalizer = 0;

    this.spawnType = template.spawnType;
    this.spawnTemplate = template.spawn;
    this.spawnFunction = template.template.pattern;

    this.edgeDistance = edgeDistance;

    this.team = team;
    this.game;
    this.track = template.template.trackPattern;

    this.x = template.x;
    this.y = template.y;
    this.yaw = template.yaw;  
  }

  doSpawnCheck () {
    if (RN(0, this.frequency - this.frequencyNormalizer) == 0) {
      this.frequencyNormalizer = 0;
      return true;
    } else {
      this.frequencyNormalizer += 1;
      return false;
    }
  }

  doSpawn () {
    let spawn;

    // determine spawn type
    if (this.spawnType == 'Ships') {
      spawn = new Ship(this.spawnTemplate, this.team);
    } else if (this.spawnType == 'Objects') {
      spawn = new GameObject(this.spawnTemplate);
    } else {
      console.log('Bad spawner type: ' + this.spawnType);
    }

    this.game.gameLoop.registerObject(spawn);

    return spawn;
  }

  run (game) {
    this.game = game;
    this.spawnFunction(this);
  }
}
