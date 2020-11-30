class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b
    })

    this.length++
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }

  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.length == 0) {
      return 0;
    } else {
      return this.items.reduce((acc, current) => {
        acc += current;
        return acc
      });

    }

  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
