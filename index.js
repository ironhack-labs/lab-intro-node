class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((i1, i2) => i1 - i2);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos]
    } else if (!this.items.includes(pos)) {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.items.length - 1];
    } else if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else if (this.length === 0) {
      throw new Error('SortedList');
    }
  }

  sum() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  avg() {
    let totalSum = this.sum(this.items);
    let average = totalSum / this.items.length;
    if (this.length > 0) {
    return average;
    } else if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
