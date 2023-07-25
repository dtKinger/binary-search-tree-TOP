const Tree = require('./Tree');
let workingArray = Tree.sortedArray;

// Build a tree from a sorted array
/// let root = Tree.buildTree(workingArray, 0, workingArray.length - 1); // => Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} }
let root = new Tree.Tree(workingArray, 0, workingArray.length - 1); // Tree {root: Node {data: 8, left: Node {data: 4, left: Node, right: Node}, right: Node {...} } }
console.info(root);

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
console.log("Preorder traversal of constructed BST<br>");
// preOrder(root);

// In-order LDR
function inOrder(root){
  if (node == null){
    return
  }
  console.log(`${node.data}, `);
}

// Post-order LRD

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