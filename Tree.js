const Node = require('./Node')
const mergeSort = require('./mergeSort')

let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let sortedArray = mergeSort(testArray);

class Tree {
  constructor(sortMeFirst){
    this.root = buildTree(sortMeFirst, 0, sortMeFirst.length - 1);
    // this.levels = 0; // Just need to count the layers of recursion while building to get this
  }
}

function buildTree (arr, start, end) {
  // base case
  if (start > end){
    return null;
  }
  // Get middle element
  let midIndex = parseInt((start + end) / 2)
  // => In app.js we make this the root 
  let node = new Node(arr[midIndex])

  // // Build the left of the tree recursively
  node.left = buildTree(arr, start, midIndex - 1)
  // // Build the right of the tree recursively
  node.right = buildTree(arr, midIndex + 1, end)  
return node;
}


module.exports = { Tree, buildTree, sortedArray }