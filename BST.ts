// class TreeNode {
//   val: string;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(val?: string, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? '.' : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// const f = new TreeNode("f");
// const e = new TreeNode("e");
// const d = new TreeNode("d", e, f);
// const c = new TreeNode("c");
// const b = new TreeNode("b", d);
// const a = new TreeNode("a", b, c);


// function traverse(root: TreeNode): string[] {
//     if (!root) {
//         return ["."]
//     }

//     let left = traverse(root.left)
//     let right = traverse(root.right)

//     console.log(left.join(", "), right.join(", "));
//     return [root.val, ...left, ...right]
// }

// console.log(traverse(a).join(','))

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// const six = new TreeNode(6);
// const five = new TreeNode(5);
// const four = new TreeNode(4, five, six);
// const three = new TreeNode(3);
// const two = new TreeNode(2, four);
// const one = new TreeNode(1, two, three);

// function traverse(root: TreeNode): number[] {
//   if (!root) {
//     return [0];
//   }

//   let left = traverse(root.left);
//   let right = traverse(root.right);

  
//   return [root.val, ...left, ...right];
// }

// console.log(traverse(one).join(","));


// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// const two = new TreeNode(2)
// const one = new TreeNode(1, two)


// function diameterOfBinaryTree(root: TreeNode | null): number {
//     //if not root
//     if(!root){
//         return 0;
//     }
    
//     //if leaf 
//     if(root.left === null && root.right === null){
//         return 1;
//     }
    
//     let left = diameterOfBinaryTree(root.left);
//     let right = diameterOfBinaryTree(root.right);
    
//     return Math.max(left, right) + 1;
// };

// console.log(diameterOfBinaryTree(one));