class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  average() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }

  sum() {
    let sum = 0;
    if (this.length == 0) {
      return 0;
    }
    this.items.forEach((element) => {
      sum += element;
    });
    return sum;
  }
}

module.exports = SortedList;
