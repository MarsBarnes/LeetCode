function isPathCrossing(path: string): boolean {
  let currentLocation = [0, 0];
  let visited = new Set();
  for (let letter of path) {
    switch (letter) {
      case "N":
        currentLocation[1] = currentLocation[1] + 1;
        break;
      case "S":
        currentLocation[1] = currentLocation[1] - 1;
        break;
      case "E":
        currentLocation[0] = currentLocation[0] + 1;
        break;
      case "W":
        currentLocation[0] = currentLocation[0] - 1;
        break;
    }
    if (visited.has(currentLocation)) {
      return true;
    } else {
      visited.add(currentLocation);
    }
  }

  return false;
}

console.log(isPathCrossing("NES"));