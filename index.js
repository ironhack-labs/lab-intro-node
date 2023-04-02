class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }


  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)

    this.length = this.items.length
  }

  get(pos) {
    let result = this.items[pos];
    if (!result) {
      throw new Error("OutOfBounds");
    }
    return result;
  }

  max() {
    let highestValue = Math.max.apply(null, this.items);
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return highestValue;
  }

  min() {
    let minValue = Math.min.apply(null, this.items);
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return minValue;
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }

    let avg = this.sum(this.items) / this.items.length;
    return avg;
  }
}

module.exports = SortedList;
