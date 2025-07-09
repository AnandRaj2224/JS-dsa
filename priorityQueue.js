class Node {
  constructor(val,priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val,priority) {
    let newNode = new Node(val,priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority <= element.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let parentIdx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
      }
      if (swap === null) break;
      this.values[parentIdx] = this.values[swap];
      this.values[swap] = element;
      parentIdx = swap;
    }
  }
}

let er = new PriorityQueue();

er.enqueue("depression",5);
er.enqueue("heart Attack",1);
er.enqueue("gun shot",2);
er.enqueue("fever",4);
er.enqueue("fire burn",3);

console.log(er);

console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());
