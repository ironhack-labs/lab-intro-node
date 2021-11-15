class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a-b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items [pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList')
    } else {
      return Math.max.apply(null, this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList')
    } else {
      return Math.min.apply(null, this.items)
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      let total = 0
      this.items.forEach(function(a) {total += a;})
      return total
    }
  } 

  avg() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList')
    } else {
      let total = 0
       this.items.forEach(function(a) {total += a;})
      return total / this.length
    }
  }
}

module.exports = SortedList;
