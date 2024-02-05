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
    if (pos >=0 && pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((accumulator, currentItem) => accumulator + currentItem, 0)
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.items.length;
    }
  }
}

module.exports = SortedList;
