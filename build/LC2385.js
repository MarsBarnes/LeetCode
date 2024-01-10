//Leet Code Question 2385: Amount of Time for Binary Tree to Be Infected
//Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
var six = new TreeNode(6, null, null);
var ten = new TreeNode(10, null, null);
var three = new TreeNode(3, ten, six);
var two = new TreeNode(2, null, null);
var nine = new TreeNode(9, null, null);
var four = new TreeNode(4, nine, two);
var five = new TreeNode(5, null, four);
var root = new TreeNode(1, five, three);
function amountOfTime(root, start) {
    //build graph
    var graph = new Map();
    var startNode;
    var buildGraph = function (root) {
        if (!root) {
            return;
        }
        graph.set(root, [root.left, root.right]);
        buildGraph(root.left);
        buildGraph(root.right);
        if (root.val === start) {
            startNode = root;
        }
        return;
    };
    buildGraph(root);
    //see startNode in output
    console.log(startNode);
    //see graph in output
    for (var _i = 0, graph_1 = graph; _i < graph_1.length; _i++) {
        var _a = graph_1[_i], key = _a[0], value = _a[1];
        console.log([key, value]);
    }
    //init counter, queue, and seen set
    var counter = 0;
    var queue = [startNode];
    var seen = new Set([startNode]);
    //bfs because checking one layer at a time
    while (queue.length) {
        var currentLength = queue.length;
        var nextQueue = [];
        for (var i = 0; i < currentLength; i++) {
            var node = queue[i];
            for (var _b = 0, graph_2 = graph; _b < graph_2.length; _b++) {
                var node_1 = graph_2[_b][0];
                if (!seen.has(node_1)) {
                    seen.add(node_1);
                    nextQueue.push(node_1);
                }
            }
        }
        queue = nextQueue;
        //increment counter for each layer we visit
        counter++;
    }
    //return counter
    return counter;
}
//# sourceMappingURL=LC2385.js.map