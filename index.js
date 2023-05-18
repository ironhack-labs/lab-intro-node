class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');      
    };
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
