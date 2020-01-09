export function RN (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// does the trigonometry to rotate a coordinate
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
  if (x < 0) { t += 3.14159 }

  // add rotation
  t += rotation;

  // convert back to cartesian coordinates
  x = r * Math.cos(t);
  y = r * Math.sin(t);

  return [x, y, coord[2]];
}
