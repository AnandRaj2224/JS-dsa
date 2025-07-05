class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  prepend(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  size() {
    return this.length;
  }
  headNode() {
    return this.head;
  }
  tailNode() {
    return this.tail;
  }
  at(index) {
    if (index > this.length || index < 0) return null;
    let current = 0;
    let nodeAtIndex = this.head;
    while (current < index) {
      nodeAtIndex = nodeAtIndex.next;
      current++;
    }
    return nodeAtIndex;
  }
  pop() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let tailNode = this.at(this.length - 2);
      tailNode.next = null;
      this.tail = tailNode;
      this.length--;
    }
  }
  contains(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
  }
  find(val) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.val === val) return index;
      current = current.next;
      index++;
    }
    return null;
  }
  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `(${current.val}) -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

let list = new LinkedList();

list.append("third");
list.append("fourth");

list.prepend("second");
list.prepend("first");

console.log("\n");

list.toString();
