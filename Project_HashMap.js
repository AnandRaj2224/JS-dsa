class HashMap {
  constructor(capacity = 20) {
    this.size = 0;
    this.loadFactor = 0.75;
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
    this.size++;
    if (this.size / this.bucket.length > this.loadFactor) {
      this._resize(this.bucket.length * 2);
    }
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
    return this.size;
  }
  clear() {
    this.bucket = new Array(this.bucket.length);
    this.size = 0;
  }
  keys() {
    let keyArray = [];
    for (let i = 0; i < this.bucket.length; i++) {
      let chain = this.bucket[i];
      if (!chain) continue;
      for (let j = 0; j < chain.length; j++) {
        keyArray.push(chain[j][0]);
      }
    }
    return keyArray;
  }
  values() {
    let valueArray = [];
    for (let i = 0; i < this.bucket.length; i++) {
      let chain = this.bucket[i];
      if (!chain) continue;
      for (let j = 0; j < chain.length; j++) {
        valueArray.push(chain[j][1]);
      }
    }
    return valueArray;
  }
  entries() {
    let keyValueArray = [];
    for (let i = 0; i < this.bucket.length; i++) {
      let chain = this.bucket[i];
      if (!chain) continue;
      for (let j = 0; j < chain.length; j++) {
        keyValueArray.push(chain[j]);
      }
    }
    return keyValueArray;
  }
   _resize(newCapacity) {
    const old = this.bucket;
    this.bucket = new Array(newCapacity);
    this.size   = 0;

    for (const chain of old) {
      if (!chain) continue;
      for (const [k, v] of chain) {
        this.set(k, v);
      }
    }
  }
}

let test = new HashMap();
 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

 test.set('moon', 'silver')
