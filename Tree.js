const Node = require('./Node')
const mergeSort = require('./mergeSort')

function buildTree (testArray) {
  let sortedArray = mergeSort(testArray)
  let midPoint = sortedArray[Math.floor(sortedArray.length / 2)]
  console.log(sortedArray)
  console.log(midPoint)
  
  return { midPoint }
}

class Tree {
  constructor(testArray){
    this.root = buildTree(testArray).midPoint || null
    // this.levels = 0; // Just need to count the layers of recursion while building to get this
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    
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

}

module.exports = Tree