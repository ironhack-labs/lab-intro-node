class SortedList {
  constructor() {
    //sorted = new SortedList([], 8)
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) return this.items[pos];
    else throw new Error("OutOfBounds");
  }

  max() {
    if (this.items.length > 0) return this.items[this.length - 1];
    else throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length > 0) return this.items[0];
    else throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((acc, curr) => (acc += curr), 0);
  }

  avg() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    else return this.sum() / this.length;
  }
}

module.exports = SortedList;
