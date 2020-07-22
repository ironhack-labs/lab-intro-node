class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('Outofbounds');
    };
    return this.items[pos]

  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    };
    //return Math.max(...this.items);
    return this.items[this.length - 1]
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    };
    //return Math.min(...this.items);
    return this.items[0];
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    };
    return this.items.reduce((acc, num) => acc + num);

  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    };
    return this.sum() / this.length
  }
}

module.exports = SortedList;