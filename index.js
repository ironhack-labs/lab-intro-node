class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = "";
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
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
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function (a, b) {
        return a - b;
      });
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function (a, b) {
        return a - b;
      });
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sum()/this.items.length
    }

  }
}

module.exports = SortedList;
