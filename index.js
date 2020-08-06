class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }
//to do
  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
