export function RN (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// does the trigonometry to rotate a coordinate around a point
export function rotateCoord(coord, rotation) {
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
  if (x < 0) { t += Math.PI }

  // add rotation
  t += rotation;

  // convert back to cartesian coordinates
  x = r * Math.cos(t);
  y = r * Math.sin(t);

  return [x, y, coord[2]];
}

export function rollCoord(coord, roll) {
  // get cartesian coordinates
  let x = coord[0];
  let z = coord[2];

  // check for invalid coordinates
  if (x == 0 && z == 0) {
    return coord;
  }

  // convert to polar coordinates
  let r = Math.sqrt((x * x) + (z * z));
  let t = Math.atan(z / x);
  if (x < 0) { t += Math.PI }

  // add rotation
  t += roll;

  // convert back to cartesian coordinates
  x = r * Math.cos(t);
  z = r * Math.sin(t);

  return [x, coord[1], z];
}

// find r from position 1 to position 2
export function angleTo(x1, y1, x2, y2) {
  // check for bad angle
  if (x2 - x1 == 0) {
    if (y2 - y1 < 0) {
      return -Math.PI / 2; // FIX NUMS
    } else {
      return Math.PI / 2;
    }
  }

  let r = Math.atan((y2 - y1) / (x2 - x1));
  if (x2 - x1 < 0) { r += Math.PI }

  return r;
}

// find distance between two points
export function pythagorean(x1, y1, x2, y2) {
  let xDistance = Math.abs(x1 - x2);
  let yDistance = Math.abs(y1 - y2);
  let distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));

  return distance;
}
