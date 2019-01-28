class SortedList {
  constructor(items, length) {
    this.item = [];
    this.length = 0;
  }
  add(x) {
    this.item.push(x);
    this.item.sort(function(a, b) {
      return a - b;
    });
    this.length++;
  }
  get(pos) {
    var position = this.item[pos - 1];
    return position;
  }
  max() {
    if (this.item == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.item);
    }
  }
  min() {
    if (this.item == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.item);
    }
  }
  average() {
    if (this.item == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (this.item.length === 0) {
      return 0;
    } else {
      return this.item.reduce((a, b) => a + b, 0);
    }
  }
}

module.exports = SortedList;
