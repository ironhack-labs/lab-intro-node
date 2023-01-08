class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      if ((a = b)) return 0;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.length - 1 >= pos) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.length > 0) {
      const sortedArray = this.items.sort(function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if ((a = b)) return 0;
      });
      return sortedArray[this.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      const sortedArray = this.items.sort(function compare(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if ((a = b)) return 0;
      });
      return sortedArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((acc, val) => {
        return acc + val;
      });
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      const sumNums = this.sum();
      return sumNums / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
