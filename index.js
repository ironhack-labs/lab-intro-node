class SortedList {
  constructor() {
    this.items = []
    this.length = 0
    }

  add(item) {
    this.items.push(item)
    this.length ++
    this.items.sort(((a,b) => {
      return a - b
    }))
  }
    
  get(pos) {
    if (pos+1 > this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    }
    let sum = this.items.reduce(function(a,b) {
      return a+b
    }) 
    return sum
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i]
    }
    let avg = total / this.items.length;
    return avg
  }
}

module.exports = SortedList;
