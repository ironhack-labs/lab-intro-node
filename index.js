class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let number = 0;
    this.items.forEach((item) => {
      if (number < item) {
        number = item;
      }
    });
    return number;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    // let number = Math.min(...this.items);
    // return number;
    let number = this.items[0];
    this.items.forEach((item) => {
      if (number > item) {
        number = item;
      }
    });
    return number;
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
