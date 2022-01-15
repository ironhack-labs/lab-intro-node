class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if(pos > this.length) {
      throw new Error('OutOfBounds');
    }

    return this.items.indexOf(pos)
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max( ...this.items )
  }

  min() {if(this.length === 0) {
    throw new Error('EmptySortedList');
  }
  return Math.min( ...this.items )
}

  sum() {}

  avg() {}
}

module.exports = SortedList;
