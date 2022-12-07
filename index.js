class SortedList {
  constructor(items, length) {
    this.items = items;
    this.length = length;
    this.items = [];
    this.lenght = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
    
  }

  get(pos) {
    if (pos > this.length || pos < this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.lenght(pos);
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => Math.max(a, b));
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => Math.min(a, b));
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
