class HashMap {
  constructor(capacity = 20) {
    this.bucket = new Array(capacity);
  }
  _hash(key) {
    let hashCode = 0;
    const PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * PRIME + key.charCodeAt(i)) % this.bucket.length;
    }
    return hashCode;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.bucket[index]) {
      this.bucket[index] = [];
    }
    this.bucket[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (!this.bucket[index]) return null;
    for (let i = 0; i < this.bucket[index].length; i++) {
      if (this.bucket[index][i][0] === key) return this.bucket[index][i][1];
    }
    return null;
  }
  has(key) {
    let contains = this.get(key);
    if (contains === null) return false;
    return true;
  }
  remove(key) {
    if (this.get(key) === null) return false;
    let index = this._hash(key);
    let chain = this.bucket[index];
    for (let i = 0; i < chain.length; i++) {
      if (chain[i][0] === key) {
        chain.splice(i, 1);
        return true;
      }
    }
  }
  length() {
    let count = 0;
    for (let i = 0; i < this.bucket.length; i++) {
      const chain = this.bucket[i];
      if (!chain) continue;
      count += chain.length;
    }
    return count;
  }
  clear() {
    this.bucket = new Array(this.bucket.length);
  }
}

let hashTable = new HashMap();
hashTable.set("name", "Anand");
hashTable.set("language", "JavaScript");
hashTable.set("topic", "Recursion");
hashTable.set("exam", "IBPS SO");
hashTable.set("goal", "Optimize Quick Sort");
hashTable.set("structure", "Binary Search Tree");
hashTable.set("method", "Radix Sort");
hashTable.set("level", "Intermediate");
hashTable.set("status", "Debugging");
hashTable.set("focus", "Performance");

console.log(hashTable);

