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
        if(value === currentNode.value) return;
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
    return this.root;
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
  height(value) {
    let current = this.find(value);

    function getHeight(node) {
      if (node === null) return -1;
      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      return 1 + Math.max(leftHeight, rightHeight);
    }

    return getHeight(current);
  }
  depth(value) {
    let current = this.root;
    let nodeDepth = 0;
    function getdepth(current, nodeDepth) {
      if (current === null) return null;
      if (current.value === value) return nodeDepth;
      const left = getdepth(current.left, nodeDepth + 1);
      if (left !== null) {
        return left;
      }
      return getdepth(current.right, nodeDepth + 1);
    }

    return getdepth(current, nodeDepth);
  }
  isBalanced(node = this.root) {
    if (!node) return true;

    // only call height if the child exists
    const leftH = node.left ? this.height(node.left.value) : -1;
    const rightH = node.right ? this.height(node.right.value) : -1;

    if (Math.abs(leftH - rightH) > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
  _buildBalanced(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;

    const mid   = Math.floor((start + end) / 2);
    const node  = new Node(arr[mid]);

    node.left   = this._buildBalanced(arr, start, mid - 1);
    node.right  = this._buildBalanced(arr, mid + 1, end);

    return node;
  }
rebalance() {
    // 1. Gather sorted values
    const data = [];
    (function traverse(node) {
      if (!node) return;
      traverse(node.left);
      data.push(node.value);
      traverse(node.right);
    })(this.root);

    // 2. Build a new, balanced tree
    this.root = this._buildBalanced(data);
  }
}
let tree = new BinarySearchTree();


let nodes = [];
function createNodes() {
  let i = 30;
  while( i--) {
    nodes.push(Math.trunc((Math.random()*10)*(10*Math.random())));
  }
}
createNodes();
tree.buildTree(nodes);
prettyPrint(tree.root);