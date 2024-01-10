function isPathCrossing(path) {
    let x = 0;
    let y = 0;
    let location = x.toString().concat(",", y.toString());
    let visited = new Set();
    visited.add(location);
    for (let letter of path) {
        switch (letter) {
            case "N":
                y++;
                break;
            case "S":
                y--;
                break;
            case "E":
                x++;
                break;
            case "W":
                x--;
                break;
        }
        if (visited.has(x.toString().concat(',', y.toString()))) {
            return true;
        }
        else {
            visited.add(x.toString().concat(',', y.toString()));
        }
    }
    return false;
}
console.log(isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"));
//# sourceMappingURL=LC1496.js.map