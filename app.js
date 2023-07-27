const Tree = require('./Tree');
const Node = require('./Node')
let workingArray = Tree.sortedArray;
let sideput = [];

// Build a tree from a sorted array
// let root = Tree.buildTree(workingArray, 0, workingArray.length - 1); // => Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} }
let aTree = new Tree.Tree(workingArray, 0, workingArray.length - 1); // Tree {root: Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} } }
let root = aTree.root


// aTree.insert(65)
// prettyPrint(root)
// aTree.remove(67)
// prettyPrint(root)
// aTree.find(324);
// prettyPrint(root)

// levelOrder(root, add10)

preOrder(root);
console.log(sideput);

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
      func(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  if (sideput.length > 0){
    return console.log(sideput)
  }
}


 /* =================== \
|   End of array Queue   |
 \ =================== */


 /* =================== \
|  Traversal functions   |
 \ =================== */

// Preoder DLR

function preOrder(node, func = arrayIfy){
  if (node == null)
  {
      return;
  }
  func(node)
  
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
  console.log(`${node.data}, `);
  inOrder(node.right) 
}
// console.log('In-order traversal (LDR):')
// inOrder(root);
// prettyPrint(root);

// Post-order LRD

function postOrder(node, func = arrayIfy){
  if (node == null){
    return
  }
  inOrder(node.left)
  console.log(`${node.data}, `);
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