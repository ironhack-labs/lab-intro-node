class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.unshift(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (this.items[pos] !== undefined) {
      return this.items[pos];
     } else {
      throw new Error ('OutOfBounds');
     }
  }

  max() {
    if (this.length > 0) {
      return Math.max.apply(null, this.items);
    } else {
      throw new Error ('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return Math.min.apply(null, this.items);
    } else {
      throw new Error ('EmptySortedList');
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((accumulator, item) => accumulator + item);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
