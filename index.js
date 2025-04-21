class SortedList {
  
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    let i = 0
    while (i < this.items.length && this.items[i] < item) {
      i++
    }
    this.items.splice(i, 0, item)
    this.length = this.items.length 
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items)
  }

  sum() {
    let number = 0

    for (let i = 0 ; i<this.items.length ; i++) {
      number += this.items[i]
    }

    return number
  }

  avg() {
    
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    
    let average = this.sum() / this.items.length

    return average
  }
}

module.exports = SortedList;
