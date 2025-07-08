class Node {
  constructor(value = 0) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > newNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.value < newNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  find(value) {
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return currentNode;
      if (currentNode.right === null && currentNode.left === null) {
        console.log("the value is not present!!");
        return;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
  }
  bfs() {
    let current = this.root;
    let data = [];
    let queue = [];
    queue.push(current);
    while(queue.length > 0) {
      current = queue.shift();
      data.push(current.value);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return data;
  }
  dfs_preOrder() {
    let visited = [];
    let current = this.root;
    function helper_recursive(node) {
      visited.push(node.value);
      if(node.left) helper_recursive(node.left);
      if(node.right) helper_recursive(node.right);
    }
    helper_recursive(current);
    return visited;
  }
}

let tree = new Bst();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log(tree.dfs_preOrder());