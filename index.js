class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else { 
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.get(this.items.length - 1)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.get(0)
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      let sum = 0
      this.items.forEach ((item) => {
        sum += item
      })
      return sum
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else { 
      let sum = this.sum()
      return sum / this.items.length
    }
  }
}

module.exports = SortedList;
