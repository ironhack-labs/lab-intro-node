class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;

    for (let i = 0; i < this.length; i++) {
      if (item < this.items[i]) {
        this.items.splice(i, 0, item);
        break;
      }
    }
  }
  get(pos) {
    if (this.length > 0) {
      return this.items[pos];
    } else if (this.items[pos] === -1) {
      throw "OutOfBounds";
    }
  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items);
    } else if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.length > 0) {
      return Math.min.apply(Math, this.items);
    } else if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    if (this.length > 0) {
      var arrSum = this.items.reduce(function(a, b) {
        return a + b;
      }, 0);

      return arrSum;
    } else {
      return 0;
    }
  }
  average() {
    if (this.length > 0) {
      var arrAvg = this.items.reduce(function(a, b) {
        return a + b;
      }, 0);

      return arrAvg / this.length;
    } else if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
