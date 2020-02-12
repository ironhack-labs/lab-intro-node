class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length++;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (pos === i) {
          return this.items[i];
        }
      }
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
