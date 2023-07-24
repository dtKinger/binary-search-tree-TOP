class Node {
  constructor(data, left = null, right = null){
    this.data = data
    this.left = left.data
    this.right = right.data
  }
}

module.exports = Node