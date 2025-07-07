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
    while (true) {
      if (current.value === value) return current;
      if (current.left === null && current.right === null) {
        console.log("Value Not In the Tree\n");
        return;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  delete(value) {
    let parent = null;
    let current = this.root;

    // 1. Locate the node
    while (current && current.value !== value) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }
    if (!current) return; // not found

    // 2. If two children, swap with in-order successor
    if (current.left && current.right) {
      let succParent = current;
      let succ = current.right;
      while (succ.left) {
        succParent = succ;
        succ = succ.left;
      }
      current.value = succ.value; // copy successor’s value
      parent = succParent; // now delete the successor
      current = succ;
    }

    // 3. At this point current has at most one child
    const child = current.left || current.right;

    // 4. Reassign the parent link (or root)
    if (!parent) {
      this.root = child; // deleting the root
    } else if (parent.left === current) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }
}

let tree = new BinarySearchTree();

tree.buildTree([20, 10, 13, 12, 14, 29, 41, 5, 21, 8, 4]);
console.log(prettyPrint(tree.root));

tree.delete(10);

console.log(prettyPrint(tree.root));
