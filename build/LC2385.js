//Leet Code Question 2385: Amount of Time for Binary Tree to Be Infected
//Define binary tree node.
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
//Add nodes to tree
let six = new TreeNode(6, null, null);
let ten = new TreeNode(10, null, null);
let three = new TreeNode(3, ten, six);
let two = new TreeNode(2, null, null);
let nine = new TreeNode(9, null, null);
let four = new TreeNode(4, nine, two);
let five = new TreeNode(5, null, four);
let root = new TreeNode(1, five, three);


//find amount of time it takes for infection to spread to all nodes. minutes will kept in a variavle called counter
function amountOfTime(root: TreeNode | null, start: number): number {

    //build graph
    let graph = new Map();

    let startNode;

    let buildGraph = (root, parent) => {
        if (!root) {
            return;
        }
        //adds left and right nodes to the graph, but also needs to add the parent!!

        buildGraph(root.left, root)
        buildGraph(root.right, root)
        graph.set(root, [root.left, root.right, parent])
        if (root.val === start) {
            startNode = root;
        }
        return;
    }

    buildGraph(root, null);

    //see startNode in output
    // console.log(startNode)

    //see graph in output
    // for (const [key, value] of graph) {
    //     console.log([key, value])
    // }

    //init counter, queue, and seen set
    let counter = 0;
    let queue = [startNode];
    let seen = new Set([startNode]);

    //bfs because checking one layer at a time
    while (queue.length) {
        let currentLength = queue.length;
        let nextQueue = [];

        for (let i = 0; i < currentLength; i++) {
            let node = queue[i];
            let neighbors = graph.get(node);
            for (const node of neighbors) {
                if (node !== null) {
                    if (!seen.has(node)) {
                        seen.add(node);
                        nextQueue.push(node);

                    }
                }
            }

        }
        if (nextQueue.length === 0) break;
        queue = nextQueue;
        //increment counter for each layer we visit
        counter++
    }

    //return counter
    return counter;
};

amountOfTime(root, 3);
