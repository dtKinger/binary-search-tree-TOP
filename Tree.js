const Node = require('./Node')
const mergeSort = require('./mergeSort')

function buildTree (testArray) {
  let sortedArray = mergeSort(testArray)
  console.log(sortedArray)
  return sortedArray[0];
}

class Tree {
  constructor(testArray){
    this.root = buildTree(testArray)
    this.levels = 0;
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