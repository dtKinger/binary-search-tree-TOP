const Node = require('./Node')
const mergeSort = require('./mergeSort')

let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let sortedArray = mergeSort(testArray);

class Tree {
  constructor(sortMeFirst){
    this.root = buildTree(sortMeFirst, 0, sortMeFirst.length - 1);
  }

  // helper method for node generation
  insert(data){
    let newNode = new Node(data);

    if(this.root === null)
      this.root = newNode; // add the node
    else // find the correct position in the tree and add the node
    this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  insertNode(node, newNode){
    if(newNode.data < node.data){ // if new Node(data) from insert(data) < current node.data
      if(node.left === null){
        node.left = newNode; // if left is null insert node here
      } else {
        // keep checking left nodes until null is found
        this.insertNode(node.left, newNode);
      }
    } else { // if newNode.data >= node.data
      if(node.right === null){
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data){
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
  }

  // Method to find the data and remove it
  removeNode(node, key){ // remove(data) passes data into key. this.root passed into node.
    if(node === null){ // traverse the tree without finding the data?
      return null
    } else if(key < node.data){ // if lesser, traverse left tree
      // key = the data to be deleted.
      node.left = this.removeNode(node.left, key);
      return node;
    } else if(key > node.data) { // if greater, move to the right tree
      node.right = this.removeNode(node.right, key);
      return node;
    } else { // if data is a match, delete node

      // deleting node with no children
      if(node.left === null && node.right === null)
      {
        node = null;
        return node;
      }

      // deleting node with one child
      if(node.left === null)
      {
        node = node.right;
        return node;
      }
      
      else if(node.right === null)
      {
        node = node.left;
        return node;
      }

      // Deleting node with two children
    
      let nextBiggest = this.findMinNode(node.right);
      node.data = nextBiggest.data;

      node.right = this.removeNode(node.right, nextBiggest.data);
      return node;
    }
  }
} // End of Tree class.

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