class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a-b});
    this.length = this.items.length
  }

  get(i) {
    let result = this.items[i]
    if (result == undefined) {
      throw new Error('OutOfBounds')
    } else {
      return result
    }
  }

  max() {
    if (this.items.length != 0) {
      return Math.max.apply(Math, this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if (this.items.length != 0) {
      return Math.min.apply(Math, this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    if (this.items.length != 0) {
      return this.items.reduce((acc, cVal) => acc + cVal)
    } else {
      return 0
    }
  }

  avg() {
    if (this.items.length != 0) {
      return this.sum()/this.items.length
    } else {
      throw new Error('EmptySortedList')
    }
  }
}

module.exports = SortedList;
