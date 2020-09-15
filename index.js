class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) throw new OutOfBounds();
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new OutOfBounds();
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) throw new OutOfBounds();
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.items.length === 0) throw new OutOfBounds();
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
