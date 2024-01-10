// function robotWithString(s: string): string {
//   let split: string[] = s.split("");
//   let letter: string;
//   let tStack: string[] = [];
//   let p: string[] = [];

//   while (split.length > 0) {
//     let lowest: string = findLetterWithLowestASCIIvalue(split);
//     let count: number = countOfLowest(split, lowest);

//     while (
//       tStack.length > 0 &&
//       tStack[tStack.length - 1].charCodeAt(0) < lowest.charCodeAt(0)
//     ) {
//       let removedLetter = tStack.pop();
//       p.push(removedLetter);
//     }
//     //for (letter of split) {
//     let splitLength = split.length;

//     for (let i = 0; i < splitLength; i++) {
//       let removedLetter = split.shift();
//       if (removedLetter) {
//         tStack.push(removedLetter);
//       }

//       if (split[i] === lowest) {
//         let top = tStack.pop();
//         p.push(top);
//         count--;
//         if (count === 0) {
//           break;
//         }
//       }
//     }
//   }

//   //p concat all left in tstack
//   for (let i = 0; i < tStack.length; i++) {
//     let removedLetter = tStack.pop();
//     p.push(removedLetter);
//   }
//   return p?.join("");
// }

// function findLetterWithLowestASCIIvalue(word: string[]): string {
//   let letter: string;
//   let answer: string = word[0];
//   for (letter of word) {
//     answer = String.fromCharCode(
//       Math.min(answer.charCodeAt(0), letter.charCodeAt(0))
//     );
//   }
//   return answer;
// }

// function countOfLowest(word: string[], lowest): number {
//   let count = 0;
//   for (let letter = 0; letter < word.length; letter++) {
//     if (word[letter].charCodeAt(0) === lowest.charCodeAt(0)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(robotWithString("bydizfve"));

// //correct output should be "bdevfziy"

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

// const isLeaf = (node: TreeNode) => node.left === null && node.right === null;


// function minDepth(root: TreeNode | null): number {
//     if (!root) return Infinity;

//     if (isLeaf(root)) {
//         return 0;
//     }
     
//     let left = minDepth(root.left);
//     let right = minDepth(root.right);
    
//     return Math.min(left, right) + 1
// };

// function arrayToTree(nums: (number | null)[]): TreeNode | null {
//   if (nums.length === 0) {
//     return null;
//   }

//   const root = new TreeNode(nums[0]);
//   const queue = [root];
//   let i = 1;

//   while (i < nums.length) {
//     const current = queue.shift();

//     if (i < nums.length && nums[i] !== null) {
//       current.left = new TreeNode(nums[i]);
//       queue.push(current.left);
//     }
//     i++;

//     if (i < nums.length && nums[i] !== null) {
//       current.right = new TreeNode(nums[i]);
//       queue.push(current.right);
//     }
//     i++;
//   }

//   return root;
// }

// // Example usage
// const nums = [3, 9, 20, null, null, 15, 7];
// const enwnu = [2,null,3,null,4,null,5,null,6]
// const root = arrayToTree(enwnu);
// console.log(root);



// let answer = minDepth(root);
// console.log(answer)