class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    var max = this.items.reduce(function(a, b) {
      return Math.max(a, b);
    });
    return max;
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, currVal) => {return acc + currVal;} );
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let total = this.items.reduce((acc, currVal) => {return acc + currVal});
    return Math.floor(total / this.length);
  }
}

module.exports = SortedList;
