class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    this.items.forEach(function(oneNumber) {
      sum += oneNumber;
    });
    return sum;
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let sum = 0;
      let average = 0;
      this.items.forEach(function(oneNumber) {
        sum += oneNumber;
      });
      average = sum / this.length;
      return average;
    }
  }
}

module.exports = SortedList;
