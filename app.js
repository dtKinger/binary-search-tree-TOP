const Tree = require('./Tree');
const Node = require('./Node')
let workingArray = Tree.sortedArray;
let sideput = [];
let height = -1;

// Build a tree from a sorted array
// let root = Tree.buildTree(workingArray, 0, workingArray.length - 1); // => Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} }
let aTree = new Tree.Tree(workingArray, 0, workingArray.length - 1); // Tree {root: Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} } }
let root = aTree.root;
let leftSubtree = root.left;
let rightSubtree = root.right;


// aTree.insert(65)
// prettyPrint(root)
// aTree.remove(67)

// aTree.depth(7);
// prettyPrint(root)

// levelOrder(root, add10)

// inOrder(root);
// console.log(sideput);

// prettyPrint(root)
// findHeight(root, 8);
// console.log(Math.round(1/4))
// findDepth(root, 8);

prettyPrint(root)
// measureLeftSubtree(); // Measure height of left subTree
// measureRightSubtree(); // Measure height of right subTree
// inOrder(root)
isBalanced();
aTree.insert(2)
aTree.insert(6)
aTree.insert(-1)
aTree.insert(-10)
aTree.insert(-20)
aTree.insert(-30)
aTree.insert(-40)
prettyPrint(root)
isBalanced();
rebalance(root, sideput);


 /* =================== \
|     Array as Queue     |
 \ =================== */

// 1. Read a Node
// 2. Add it's children to the queue
// 3. shift() and read the next node in the queue / Repeat 1 - 3

function add10 (node){ // a function to call in levelOrder's 2nd param
  node.data = parseInt(node.data) + 10

  sideput.push(node.data)
  return sideput;
}

function arrayIfy (node) { // default function if nothing is called in 
  // levelOrder's second parameter
  if (node.data){
    sideput.push(node.data)
  }
  return sideput;
}

function levelOrder(root, func = arrayIfy){

  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length){
    let length = queue.length;
    result.push(queue.map(node => node.data))
    
    while (length--){
      let node = queue.shift();
      func(node); // Read the node
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  if (sideput.length > 0){
    return sideput;
  }
}

 /* =================== \
|   End of array Queue   |
 \ =================== */


 /* =================== \
|  Traversal functions   |
 \ =================== */

  // Height // root should have highest height (3) maximum jumps to a leaf 
  // (check all leafs and take the king of the hill)
  // It's like find() but count on the way and then compare - reassign if greater

function measureLeftSubtree () {
  return parseInt(measureTreeHeight(leftSubtree));
}

function measureRightSubtree () {
  return parseInt(measureTreeHeight(rightSubtree));
}

function isBalanced (difference = 0) {
  
  let leftHeight = measureLeftSubtree()
  console.log(`leftHeight is ${leftHeight}`)
  let rightHeight = measureRightSubtree()
  console.log(`rightHeight is ${rightHeight}`)
  difference = Math.abs(leftHeight - rightHeight);

  console.log(`The difference between sub-tree heights is ${difference}`)
  if (difference > 1) console.log(`This binary tree is not balanced.
  >> type rebalance() to balance the tree.`)
  if (difference <= 1) console.log(`This binary tree is balanced.`)
}

function rebalance (root, array) {
  console.log('In-order traversal (LDR):')
  inOrder(root);
  console.log(array)
  root = new Tree.Tree(sideput).root; // re-build the tree and get the root
  // root = newTree.root
  prettyPrint(root);
}

function measureTreeHeight (node) {
  // Base Case
  if (node == null){
    return -1;
  }
  // Store the maximum height of
  // the left and right subtree
  let leftHeight = findHeightUtil(node.left);

  let rightHeight = findHeightUtil(node.right);

  // Update height of the current node
  let ans = Math.max(leftHeight, rightHeight) + 1;

  return ans; // Can't just console.log this because the values are needed in other functions now
}



function findHeightUtil(root, x){
  // Base Case
  if (root == null){
    return -1;
  }
  // Store the maximum height of
  // the left and right subtree
  let leftHeight = findHeightUtil(root.left, x);

  let rightHeight = findHeightUtil(root.right, x);

  // Update height of the current node
  let ans = Math.max(leftHeight, rightHeight) + 1;

  // If current node is the required node
  if (root.data == x)
      height = ans;

  return ans;
}

// Function to find the height of
// a given node in a Binary Tree
function findHeight(root, x){
  
  // Stores height of the Tree
  findHeightUtil(root, x);

  // Return the height
  console.log(height);
}


// Preoder DLR

function preOrder(node, func = arrayIfy){
  if (node == null){
    return;
  }

  func(node) // when a node becomes available, send it to to func to process.
  // console.log(node.data)
  preOrder(node.left);
  preOrder(node.right);
  
}
// console.log('Pre-order traversal (DLR):')
// preOrder(root);

// In-order LDR

function inOrder(node, func = arrayIfy){
  if (node == null){
    return
  }
  inOrder(node.left)
  
  func(node) // when a node becomes available, send it to to func to process.

  inOrder(node.right) 
}
// console.log('In-order traversal (LDR):')
// inOrder(root);
// console.log(sideput)

// Post-order LRD

function postOrder(node, func = arrayIfy){
  if (node == null){
    return
  }
  inOrder(node.left)
  func(node) // when a node becomes available, send it to to func to process.
  inOrder(node.right) 
}
// console.log('Post-order traversal (LRD):')
// postOrder(root);

 /* =================== \
|  END OF Traversal FNs  |
 \ =================== */

function prettyPrint (node, prefix = "", isLeft = true) {
    
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
// prettyPrint(root);