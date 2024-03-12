class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if (this.items.length-1 < pos) {
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos];
    }

  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.items[this.items.length-1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce(
      (total, element) => total + element,
      0,
    );
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      let total = this.items.reduce(
        (total, element) => total + element,
        0,
      );
      return total/this.items.length;
    }
  }
}

module.exports = SortedList;
