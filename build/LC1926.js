// 1926. Nearest Exit from Entrance in Maze
function nearestExit(maze, entrance) {
    //intuition: we can tell we need to use bfs because the problem asks for the shortest paths
    //use this function to check in bound and is a empty cell
    let valid = (row, item) => {
        return row >= 0 && item >= 0 && row < numberOfRows && item < itemsInRow && maze[row][item] === ".";
    };
    let numberOfRows = maze.length;
    let itemsInRow = maze[0].length;
    let seen = [];
    for (let i = 0; i < numberOfRows; i++) {
        seen.push(new Array(itemsInRow).fill(false));
    }
    seen[entrance[0]][entrance[1]] = true;
    let queue = [[entrance[0], entrance[1]]];
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 0;
    console.log(numberOfRows, itemsInRow);
    if (numberOfRows == 1 && itemsInRow == 1) {
        return -1;
    }
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];
        steps++;
        for (let i = 0; i < currentLength; i++) {
            let [row, item] = queue[i];
            if (steps !== 1) {
                if (row == 0 || item == 0 || row == numberOfRows - 1 || item == itemsInRow - 1) {
                    console.log(seen);
                    console.log(queue);
                    return steps;
                }
            }
            for (const [x, y] of directions) {
                let nextRow = row + y;
                let nextitem = item + x;
                if (valid(nextRow, nextitem) && !seen[nextRow][nextitem]) {
                    seen[nextRow][nextitem] = true;
                    nextQueue.push([nextRow, nextitem]);
                    console.log(queue);
                }
            }
        }
        queue = nextQueue;
    }
    console.log(seen);
    return -1;
}
;
nearestExit([
    ["+", "+", ".", "+"],
    [".", ".", ".", "+"],
    ["+", "+", "+", "."],
], [1, 2]);
//# sourceMappingURL=LC1926.js.map