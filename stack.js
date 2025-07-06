class Node {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  push(val) {
    let newNode = new Node(val);
    if(this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentNode = this.first;
      this.first = newNode;
      newNode.next = currentNode;
    }
      this.size++;
  }
  pop() {
    if(this.size <= 0 ) return null;
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    }
    let currentNode = this.first;
    this.first = currentNode.next; 
    this.size--;
  }
}

let newStack = new Stack();

newStack.push("1");
newStack.push("2");
newStack.push("3");
newStack.push("4");
newStack.push("5");

console.log(newStack);

console.log("\n");

newStack.pop();
newStack.pop();

console.log(newStack);

