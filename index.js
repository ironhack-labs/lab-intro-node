class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    else {
      let max = Math.max(...this.items)
      return max
    }
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    else {
      let min = Math.min(...this.items)
      return min
    }
  }

  sum() {
    if (this.length === 0){
      return 0
    }
    else {
      return this.items.reduce((acc, currentValue) => acc + currentValue)
    }
  }

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    else {
      return this.items.reduce((acc, currentValue) => acc + currentValue) / this.length
    }
  }
}

module.exports = SortedList;
