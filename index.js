class SortedList {
  constructor(items, length) {
    this.items = items || [];
    this.length = length || 0;
  }

  add(item) {    
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items[this.length - this.items.length];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    //return this.items[0] + this.items[this.length - 1];
    return this.items.reduce((acc, item) => acc + item, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
