export const staggered = function(weapon, ship, game) {
  let projectile = weapon.spawnProjectile(ship);

  if ( weapon.state >= weapon.spread.length - 1 ) {
    weapon.state = 0;
  } else {
    weapon.state += 1;
  }

  projectile.x += Math.cos(projectile.yaw) * weapon.spread[weapon.state];
  projectile.y += Math.sin(projectile.yaw) * weapon.spread[weapon.state];

  game.gameLoop.registerObject(projectile);
}

export const pairs = function(weapon, ship, game) {
  let projectile1 = weapon.spawnProjectile(ship);
  let projectile2 = weapon.spawnProjectile(ship);

  if ( weapon.state >= weapon.spread.length - 1 ) {
    weapon.state = 0;
  } else {
    weapon.state += 1;
  }

  projectile1.x += Math.cos(projectile1.yaw) * weapon.spread[weapon.state];
  projectile1.y += Math.sin(projectile1.yaw) * weapon.spread[weapon.state];
  projectile2.x -= Math.cos(projectile2.yaw) * weapon.spread[weapon.state];
  projectile2.y -= Math.sin(projectile2.yaw) * weapon.spread[weapon.state];

  game.gameLoop.registerObject(projectile1);
  game.gameLoop.registerObject(projectile2);
}
