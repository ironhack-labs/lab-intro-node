class SortedList {
  // Iteration 1
  constructor() {
    this.items = []
    this.length = this.items.length
  }
// Iteration 2
  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a -b
    })
    this.length++
  }
// Iteration 3
  get(pos) {
    if(this.length >= pos) {
      return this.items[pos]
    }
    throw new Error('OutOfBounds')
  }
// Iteration 4
  max() {
    if(this.length > 0) {
        return Math.max(...this.items)
    }
    throw new Error('EmptySortedList')
  }
// Iteration 5
  min() {
    if(this.length > 0) {
      return Math.min(...this.items)
    }
    throw new Error('EmptySortedList')
  }
// Iteration 6
  sum() {
    if(this.length > 0) {
      const sum =  this.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
      return sum
    }
      return 0
  }
// Iteration 7
  avg() {
    if(this.length > 0) {
      const avg = this.sum() / this.length
      return avg
    }
    throw new Error('EmptySortedList')
  }
}

module.exports = SortedList;
