class SortedList {
  constructor() {
    this.items = [];
    this.sortedItems = this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.sortedItems.length;
  }

  add(item) {
    this.sortedItems.push(item);
    this.length++;
    this.sortedItems.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.sortedItems.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sortedItems[this.sortedItems.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sortedItems[0];
  }

  sum() {
    let total = 0;
    if (this.sortedItems.length === 0) {
      return 0;
    } else {
      for (let item of this.sortedItems) {
        total += item;
      }
    }
    return total;
  }

  avg() {
    let total = 0;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      for (let item of this.sortedItems) {
        total += item;
      }
    }
    return total / this.length;
  }
}

module.exports = SortedList;
