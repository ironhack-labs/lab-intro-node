class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((itemA, itemB) => itemA - itemB);
    this.length = this.items.length;

  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedlist");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = total + this.items[i];
    }
    return total;
  }

  avg() {
    if ( this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    const total = this.sum();
    return total/ this.items.length;
  }
}

module.exports = SortedList;
