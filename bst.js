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
}

let tree = new Bst();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log(tree);

console.log(tree.find(99));
console.log(tree.find(5));
console.log(tree.find(30));

