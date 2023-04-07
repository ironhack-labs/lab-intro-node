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

  max() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.items[this.length - 1];
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    return this.items.reduce((accum, curr) => accum + curr, 0);
    if (!this.items.length) throw new Error("EmptySortedList");
  }

  avg() {
    if (!this.length) throw new Error("valio queso");
    return this.sum() / this.length;
  }
}
module.exports = SortedList;
