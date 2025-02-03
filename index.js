class SortedList {
  constructor() {
    this.items = [],
    this.length = 0;
  }


  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    else {
    return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
    let max = Math.max(...this.items);
    return max;
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      let min = Math.min(...this.items);
      return min;
    }
  }

  sum() {
    let sum = 0;
    if (this.length === 0) {
      return 0
    }
    else {
    this.items.forEach(function(elm) {
sum += elm
    })
    return sum;
  }
}

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
    return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
