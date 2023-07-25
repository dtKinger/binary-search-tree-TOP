const Tree = require('./Tree');
const Node = require('./Node')
let workingArray = Tree.sortedArray;


// Build a tree from a sorted array
// let root = Tree.buildTree(workingArray, 0, workingArray.length - 1); // => Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} }
let aTree = new Tree.Tree(workingArray, 0, workingArray.length - 1); // Tree {root: Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} } }
let root = aTree.root

aTree.insert(65)
prettyPrint(root);


 /* =================== \
| Modification functions |
 \ =================== */

function removeNode (data) {

}

 /* =================== \
|  ENDOF Modication FNs  |
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
// prettyPrint(root);

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