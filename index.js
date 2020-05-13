class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length === 0 || item > this.items[this.length - 1]) {
      this.items.push(item);
      this.length++;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (item < this.items[i]) {
          this.items.splice(i, 0, item);
          this.length++;
          return;
        }
      }
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
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
