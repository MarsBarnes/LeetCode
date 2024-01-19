//1971. Find if Path Exists in Graph
function validPath(n, edges, source, destination) {
    //build graph via map
    let graph = new Map();
    for (let edge of edges) {
        if (graph.has(edge[0])) {
            let vals = graph.get(edge[0]);
            graph.set(edge[0], [...vals, edge[1]]);
        }
        else {
            graph.set(edge[0], [edge[1]]);
        }
    }
    //start with key at source and recurse through all values . if get to destination return true
    let search = (start, end, answer) => {
        console.log(start);
        if (start === end)
            answer = true;
        if (graph.has(start)) {
            for (let val of graph.get(start)) {
                console.log(val);
                if (graph.has(val) && !seen.has(val)) {
                    seen.add(val);
                    search(val, end, answer);
                }
                return answer;
            }
        }
        // if (answer) {
        //   return true;
        // } else {
        //   return false;
        // }
    };
    // console.log(seen)
    let answer1 = false;
    let seen = new Set();
    seen.add(source);
    let forwards = search(source, destination, answer1);
    seen.clear();
    let answer2 = false;
    seen.add(destination);
    let backwards = search(destination, source, answer2);
    console.log(`forwards: ${forwards}     ||      backwards: ${backwards}`);
    //   return forwards || backwards;
    return answer1 || answer2;
}
// validPath(6, [
//   [0, 1],
//   [0, 2],
//   [3, 5],
//   [5, 4],
//   [4, 3],
// ], 0, 5);
validPath(3, [
    [0, 1],
    [1, 2],
    [2, 0],
], 0, 2);
//# sourceMappingURL=LC1971.js.map