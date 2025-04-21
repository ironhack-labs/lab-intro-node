class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    if (this.length > 1) {
      this.length = this.items.length;
      return this.items.sort((a, b) => a - b);
    } else {
      this.length = this.items.length;
      return this.items;
    }
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((sum, val) => {
        return (sum += val);
      });
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const total = this.items.reduce((sum, val) => {
        return (sum += val);
      });
      return total / this.length;
    }
  }
}

module.exports = SortedList;
