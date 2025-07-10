class HashMap {
  constructor(capacity = 20) {
    this.bucket = new Array(capacity);
  }
  _hash(key) {
    let hashCode = 0;
    const PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * PRIME + key.charCodeAt(i)) % this.keyMap.length;
    }
    return hashCode;
  }
  
}

let hashTable = new HashMap();