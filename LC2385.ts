//Leet Code Question 2385: Amount of Time for Binary Tree to Be Infected

//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let six = new TreeNode(6, null, null);
let ten = new TreeNode(10, null, null);
let three = new TreeNode(3, ten, six);
let two = new TreeNode(2, null, null);
let nine = new TreeNode(9, null, null);
let four = new TreeNode(4, nine, two);
let five = new TreeNode(5, null, four);
let root = new TreeNode(1, five, three);

function amountOfTime(root: TreeNode | null, start: number): number {
  //build graph
  let graph = new Map();

  let startNode;

  let buildGraph = (root) => {
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
  for (const [key, value] of graph) {
    console.log([key, value]);
  }

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
      for (const [key, node] of graph) {
        if (!seen.has(node)) {
          seen.add(node);
          nextQueue.push(node);
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


amountOfTime(root, 3);