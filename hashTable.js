class HashTable {
  constructor(size = 15) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let hashCode = 0;
    const PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * PRIME + key.charCodeAt(i)) % this.keyMap.length;
    }
    return hashCode;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
}

let ht = new HashTable();
ht.set("name", "Anand");
ht.set("language", "JavaScript");
ht.set("topic", "Recursion");
ht.set("exam", "IBPS SO");
ht.set("goal", "Optimize Quick Sort");
ht.set("structure", "Binary Search Tree");
ht.set("method", "Radix Sort");
ht.set("level", "Intermediate");
ht.set("status", "Debugging");
ht.set("focus", "Performance");

console.log(ht);

console.log(ht.get("level"))
console.log(ht.get("name"))
console.log(ht.get("goal"))
console.log(ht.get("superman"))
console.log(ht.get("method"))
