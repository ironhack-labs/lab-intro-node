class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.unshift(item);
    this.length = this.items.length;
    return this.items.sort(function(a, b){return a-b});
  }

  get(pos) {
    if (pos < 0 || pos >= this.length){
      throw new Error("OutOfBounds");
    }
    
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items.reduce((a, b) => Math.max(a, b), -Infinity);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items.reduce((a, b) => Math.min(a, b));
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => a += b)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items.reduce((a, b) => a += b)/this.items.length;
  }
}

module.exports = SortedList;
