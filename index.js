class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    }
    let highest = -Infinity;
    this.items.forEach((item) => {
      if (item > highest)
        highest = item
    })
    return highest
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    }
    let min = Infinity;
    this.items.forEach((item) => {
      if (item < min)
        min = item
    })
    return min
  }

  sum() {
    let sum = 0;
    this.items.forEach((item) => {
      sum += item;
    })
    return sum
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    }
    return this.sum() / this.items.length
  }
}

module.exports = SortedList;
