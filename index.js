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
    if (this.length <= pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items.at(pos);
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.pop();
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((total, num) => total += num, 0);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
