const Node = require('./Node')
const mergeSort = require('./mergeSort')
let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let sortedArray = mergeSort(testArray);
let root = null;

class Tree {
  constructor(sortMeFirst){
    this.root = buildTree(sortMeFirst, 0, sortMeFirst.length - 1);
    // this.levels = 0; // Just need to count the layers of recursion while building to get this
  }
}

// console.log(sortedArray.length)
function buildTree (arr, start, end) {
  // base case
  if (start > end){
    return null;
  }
  // Get middle element and make it the root
  let midIndex = parseInt((start + end) / 2)
  let node = new Node(arr[midIndex])

  // // Build the left of the tree recursively
  node.left = buildTree(arr, start, midIndex - 1)
  // // Build the right of the tree recursively
  node.right = buildTree(arr, midIndex + 1, end)  
return node;
}


/* A utility function to print preorder traversal of BST */
function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    console.log(node.data + ",");
    preOrder(node.left);
    preOrder(node.right);
}
 
console.log("Preorder traversal of constructed BST<br>");
root = buildTree(sortedArray, 0, sortedArray.length - 1);
console.log(sortedArray)
// preOrder(root);

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
prettyPrint(root);


module.exports = Tree