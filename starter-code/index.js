class SortedList {
  constructor() {
    this.items = []
    this.notSorted = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else { return Math.max(...this.items) }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else { return Math.min(...this.items) }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else {
      var sum = this.items.reduce((a, b) => a + b, 0);
      var average = sum / this.length
      return average
    }
  }
  sum() {
    var sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  }
};

module.exports = SortedList;
