class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b;
    })
    this.length = this.items.length;
  }
  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max.apply(null, this.items)
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(null, this.items)
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
  }
  avg() {
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue) / this.items.length
  }
}

module.exports = SortedList;