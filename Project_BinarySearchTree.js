const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  buildTree(array) {
    for (const value of array) {
      this.insert(value);
    }
  }
  find(value) {
    let current = this.root;
    while(true) {
      if(current.value === value) return current;
      if(current.left === null && current.right === null) {
        console.log("Value Not In the Tree\n");
        return;
      }
      if(value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
}

let tree = new BinarySearchTree();

tree.buildTree([20, 10, 29, 41, 5, 21, 9,4]);
console.log(prettyPrint(tree.root));

console.log(tree.find(41));


