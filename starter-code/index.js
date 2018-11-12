class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (this.items[pos-1]) return this.items[pos-1];

    else throw new Error("OutOfBounds");
  }

  max() {
    if (this.items.length > 0) return this.items[this.items.length - 1];

    else throw new Error("EmptySortedList");
  }
  min() {
    if (this.items.length > 0) return this.items[0];
    
    else throw new Error("EmptySortedList");
  }
  average() {
    if (this.items.length > 0) {
      let counter = 0;
      this.items.map(elem => counter += elem);
      return counter / this.items.length;
    }
    else throw new Error("EmptySortedList");
  }
  sum() {
    if (!this.items.length) return 0;
    
    return this.items.reduce((acc, elem) => acc += elem);
  }
};

module.exports = SortedList;