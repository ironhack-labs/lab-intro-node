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
      const sorted = this.items.sort(function (a, b) {
        return a - b;
      });

      const maxNumber = Math.max.apply(null, sorted);

      return maxNumber;
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const sorted = this.items.sort(function (a, b) {
        return a - b;
      });

      const minNumber = Math.min.apply(null, sorted);

      return minNumber;
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const sum = this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      return sum;
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const sum = this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      return sum / this.items.length;
    }
  }
}

module.exports = SortedList;
