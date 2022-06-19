class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    return this.items.sort(function(a, b) {
      return a - b
    })
  }

  get(pos) {
    if (!this.items[pos]) {
      return Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      return Error("EmptySortedList")
    } else {
      return this.items[this.items.length -1]
    }
  }

  min() {
    if (this.items.length === 0) {
      return Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      let sum = 0
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
      }
      return sum
    }
  }

  avg() {
    if (this.items.length === 0) {
      return Error("EmptySortedList")
    } else {
      let sum = 0
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
      }
      return sum / this.items.length
    }
  }
}

module.exports = SortedList;
