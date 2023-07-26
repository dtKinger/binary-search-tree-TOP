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

// levelOrder(root, breadthOutput);
levelOrder(root, breadthOutput)



 /* =================== \
|     Array as Queue     |
 \ =================== */

// 1. Read a Node
// 2. Add it's children to the queue
// 3. shift() and read the next node in the queue / Repeat 1 - 3

function breadthOutput (node){ // a function to call in levelOrder's 2nd param
  console.log("We didn't let the default arrayIfy function run!")
}

function arrayIfy (node) { // default function if nothing is called in 
  // levelOrder's second parameter
  sideput.push(node.data)
  
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
      if (node.data){
        func(node);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return console.log(sideput)
}


 /* =================== \
|   End of array Queue   |
 \ =================== */


 /* =================== \
|  Traversal functions   |
 \ =================== */

// Preoder DLR

function preOrder(node){
  if (node == null)
  {
      return;
  }
  console.log(`${node.data}, `);
  preOrder(node.left);
  preOrder(node.right);
}
// console.log('Pre-order traversal (DLR):')
// preOrder(root);

// In-order LDR

function inOrder(node){
  if (node == null){
    return
  }
  inOrder(node.left)
  console.log(`${node.data}, `);
  inOrder(node.right) 
}
// console.log('In-order traversal (LDR):')
// inOrder(root);
prettyPrint(root);

// Post-order LRD

function postOrder(node){
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