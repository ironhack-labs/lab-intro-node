class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.at(this.items.length - 1);
    }
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
  return this.items.at(0);

  }

  sum() {
    if (this.items.length === 0) return 0;
      return this.items.reduce((acc, item) => acc + item);

  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
      return this.sum() / this.items.length;
    }
    // return (this.items.length === 0)  ? new Error('EmptySortedList'):      this.sum() / this.items.length;
  }


module.exports = SortedList;
