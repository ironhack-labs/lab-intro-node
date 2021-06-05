class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    })
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1]
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      let sum = this.items.reduce((acc, el) => {
        return acc + el;
      }, 0);
      return sum
    }
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/this.items.length

    }
  }
}

module.exports = SortedList;
