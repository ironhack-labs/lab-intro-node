class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;

  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;

    this.items.sort((a, b) => {
      return a - b
    });
  }
  get(pos) {
    // if (pos > this.items.length)
    //   throw new Error('OutOfBounds');
    return this.items[pos];

  }
  max() {
    if (this.items.length === 0)
      throw new Error("EmptySortedList");
    return this.items[this.items.length - 1];
  }
  min() {
    if (this.items.length === 0)
      throw new Error("EmptySortedList");
    return this.items[0];
  }
  sum() {
    if (this.items.length === 0) return 0;
    return this.items.reduce((acc, el) => acc + el)
  };

  average() {
    if (this.items.length === 0)
      throw new Error("EmptySortedList");
    return this.sum() / this.items.length;

  }

};

module.exports = SortedList;