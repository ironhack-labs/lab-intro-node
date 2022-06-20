class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    return this.items.sort(function(a, b) {
      return a - b
    })
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length -1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      let sum = 0
      for (let i = 0; i < this.length; i++) {
        sum += this.items[i]
      }
      return sum
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let sum = 0
      for (let i = 0; i < this.length; i++) {
        sum += this.items[i]
      }
      return sum / this.length
    }
  }
}

module.exports = SortedList;
