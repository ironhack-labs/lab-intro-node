class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length;
  }

  add(item) {
    let items = [];
    this.items.push(item);
    this.items.sort(function(a, b){
      return a-b;
    })
    this.length = this.items.length;
  }

  get(pos) {
    const arrLength = this.items.length;
    if (arrLength < pos) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    const highestVal = this.items.length;
    if (highestVal === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    const lowestVal = this.items.length;
    if (lowestVal === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
