class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }

  add(item) {
    this.item.push(item)
    this.length = this.item.length
    this.item.sort((a, b) => a - b)
  }
  get(pos) {
    return this.item[pos]
  }
  max() {
    if (this.item.length == 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.item)
  }
  min() {
    if (this.item.length == 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.item)
  }
  average() {
    if (this.item.length == 0) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.item.length
  }

  sum() {
    let sum = 0
    for (let i = 0; i < this.item.length; i++) {
      sum += this.item[i]
    }
    return sum
  }
};

module.exports = SortedList;