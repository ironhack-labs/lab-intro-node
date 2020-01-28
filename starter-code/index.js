class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else return this.items[pos];
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });

      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function(a, b) {
        return b - a;
      });

      return this.items[this.items.length - 1];
    }
  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      let result = this.items.reduce((a, b) => a + b, 0);

      return result;
    }
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      let result = this.items.reduce((a, b) => a + b, 0) / this.items.length;

      return result;
    }
  }
}

module.exports = SortedList;
