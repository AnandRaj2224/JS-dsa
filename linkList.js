// learning link list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
      this.length++;
      return this;
  }

  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    let current = this.head;
    let newTail = this.head
    if(!this.head) return undefined;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  popFront() {
    if(!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;

    return current;
  }
  addFront(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(postion) {
    if(postion < 0 || postion > this.length) return null; 
    let i = 0;
    let currentTravel = this.head;
    while(i < postion) {
      currentTravel = currentTravel.next;
      i++;
    }
    return currentTravel;
  }

  set(value,postion) {
    let currentNode = this.get(postion);
    currentNode.val = value;
     return currentNode;
  }
  insert(value,postion) {
    let currentNode = this.get(postion);
    let prevNode = this.get(postion-1);
    let newlyCreatedNode = new Node(value);
    newlyCreatedNode.next = currentNode;
    prevNode.next = newlyCreatedNode;
    this.length++;
  }

  listReverse() {
    let next = null;
    let prev = null;
    let node = this.head;
    while(node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next; 
    }
    this.head = prev;
    return this;
  }
}

let list =  new singlyLinkList;
list.push("1st node");
list.push("2nd node");
list.push("3");
list.push("4th node");
list.push("5th node");

list.set("3rd node",2);

list.traverse();

console.log("\n");

list.listReverse();
list.traverse();
console.log("\n");



