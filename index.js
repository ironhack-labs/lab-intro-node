class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
      counter += this.items[i];
    }
    return counter;
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    let counter = 0;

    for (let i = 0; i < this.length; i++) {
      counter += this.items[i];
    }
    return counter / this.length;
  }
}

module.exports = SortedList;
