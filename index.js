class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item)
    this.items.sort((a, b) => {
      if (a < b) {
        return -1;
      }
    });
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.length === 0) {
     throw new Error('OutOfBounds')
    } else {
      return this.items[this.items.length - 1]
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
