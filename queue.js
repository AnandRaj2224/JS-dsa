class Node {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if(this.size <= 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentNode = this.last;
      currentNode.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  dequeue() {
    if(this.size <= 0) return null;
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    }
    let currentNode = this.first;
    this.first = currentNode.next;
    this.size--;
  }
}

let newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);

console.log(newQueue);

console.log("\n");
newQueue.dequeue();
newQueue.dequeue();


console.log(newQueue);


