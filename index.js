class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // this.items.forEach((element, elementIndex) => {
    //   if (element > item) {
    //     this.items.splice(elementIndex, 0, item);
    //   }
    // });
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
