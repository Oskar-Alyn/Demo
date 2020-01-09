import { Spawner } from '../classes/Spawner.js';
import * as ships from './ships.js';
import * as objects from './objects.js';
import * as teams from './teams.js';

export const CREDIT_SPAWNER = new Spawner({
  spawnType: 'Objects',
  frequency: 200,
  spawnTemplate: objects.CREDIT,
  onlyEdges: false,
});
