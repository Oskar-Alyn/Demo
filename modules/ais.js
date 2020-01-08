export const NULL_AI = function(aShip) {

}

export const BASE_AI = function(aShip) {
  aShip.movingForward = false;
  aShip.movingBackward = false;
  aShip.turningLeft = true;
  aShip.turningRight = false;
}
