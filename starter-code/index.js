class SortedList {
  constructor() {
    this.items = [];
    this.lenght = this.items.lenght;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => {
      return a - b;
    });

    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length != 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length != 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
