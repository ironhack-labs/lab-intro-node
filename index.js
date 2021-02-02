class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max(maxPos) {
    if (maxPos >= this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min(minPos) {
    if (minPos >= this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum(sumEl) {
    if (sumEl === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }

  avg(avgArr) {
    if (avgArr >= 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;