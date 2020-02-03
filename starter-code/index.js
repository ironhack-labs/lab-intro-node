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
    if (this.items[pos] < this.length) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[this.length-1]
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    if (this.length === 0) return 0
    return this.items.reduce((ac, cu) => ac + cu, 0)
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items.reduce((ac, cu) => ac + cu, 0)/this.length;
  }
}

module.exports = SortedList;
