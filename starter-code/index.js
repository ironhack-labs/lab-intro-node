class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }


  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function (a, b) {
      return a - b;
    });
  }


  get(pos) {

    if (this.items[pos - 1] === null) {
      throw new Error("error");
    } else {
      return this.items[pos - 1];
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }


  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;