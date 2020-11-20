class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      var max = Math.max(...this.items);
      return max;
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      var min = Math.min(...this.items);
      return min;
    }
  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      return this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      var reducedArray = this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      reducedArray = reducedArray / this.items.length;
      return reducedArray;
    }
  }
}

module.exports = SortedList;
