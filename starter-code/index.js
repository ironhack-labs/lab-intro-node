class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos] ? this.items[pos] : function() {throw new Error("OutOfBounds")}();
  }

  max() {
    return this.items.length > 0 ? Math.max(...this.items) : function() {throw new Error("EmptySortedList")}();
  }

  min() {
    return this.items.length > 0 ? Math.min(...this.items) : function() {throw new Error("EmptySortedList")}();
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    return this.length !== 0 ? this.sum() / this.length : function() {throw new Error("EmptySortedList")}();
  }
}

module.exports = SortedList;
