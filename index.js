class SortedList {
  constructor(item, length) {
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
    if (pos <= this.items.length - 1) {
      return this.items[pos];
    } else throw new Error("OutOfBounds");
  }

  max() {
    if (this.items != "") {
      this.items.sort(function (a, b) {
        return b - a;
      });
      let highest = this.items[0];
      return highest;
    } else throw new Error("EmpySortedList");
  }

  min() {
    if (this.items != "") {
      this.items.sort(function (a, b) {
        return a - b;
      });
      let lowest = this.items[0];
      return lowest;
    } else throw new Error("EmpySortedList");
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
