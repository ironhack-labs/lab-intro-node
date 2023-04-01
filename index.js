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
    this.length++;
  }

  get(pos) {
    for (let index = 0; index < this.items.length; index++) {
      if (pos <= this.items.length) {
        let element = this.items[pos];
        return element;
      } else if (pos > this.items.length) {
        throw new Error("OutOfBounds");
      }
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}
module.exports = SortedList;
