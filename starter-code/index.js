class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
    
  }

  add(item) {
    this.items.push(item)

    function sortNumber(a, b) {
      return a - b
    }
    this.items.sort(sortNumber)
    return this.length
  }

  get(pos) {
    if (pos !== this.items[pos]) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    let sum = 0
    for (let i = 0; i < this.items.length; i ++){
      sum += this.items[i]
    }
  }

  avg() {}
}

module.exports = SortedList;