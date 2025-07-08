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
  bfs() {
    let data = [];
    let queue = [];
    let current = this.root;
    queue.push(current);
    while (queue.length > 0) {
      current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }
  levelOrder(callBack) {
    if (typeof callBack !== "function") {
      throw TypeError("no callback provided");
    }
    let newData = this.bfs();
    callBack(newData);
  }
  inOrder(callBack) {
    if (typeof callBack !== "function") {
      throw TypeError("inorder requires a callback function\n");
    }
    // dfs(inorder)
    let data = [];
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    callBack(data);
    
  }
  preOrder(callBack) {
    if (typeof callBack !== "function") {
      throw TypeError("preorder requires a callback function\n");
    }
    // dfs(preorder)
    let data = [];
    let node = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    callBack(data);
  }
  postOrder(callBack) {
    if (typeof callBack !== "function") {
      throw TypeError("postorder requires a callback function\n");
    }
    // dfs(preorder)
    let data = [];
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(node);
    callBack(data);
  }
}

let tree = new BinarySearchTree();

tree.buildTree([20, 10, 13, 12, 14, 29, 41, 5, 21, 8, 4]);
console.log(prettyPrint(tree.root));

tree.inOrder((data) => {
  for (const v of data) console.log(`the nodes are :${v}`);
});

console.log("\n");
console.log("\n");

tree.preOrder((newData) => {
  for (const v of newData) console.log(`the nodes are :${v}`);
});

console.log("\n");
console.log("\n");

tree.postOrder((newData) => {
  for (const v of newData) console.log(`the nodes are :${v}`);
});

