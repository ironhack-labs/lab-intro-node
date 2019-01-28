class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a - b
    })
    this.length = this.items.length
    //  this is neccessary, bc. the constructor only runs once and initializes this.length to 0; we therefore need to update it after each added element
    return this.items
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds')
    } else {
    return this.items[pos-1]
    }
  }

  max() {
    try 
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
    return Math.max(...this.items)
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
    return Math.min(...this.items)
    }
  }

  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    const sum = this.items.reduce((total, amount) => total + amount);
    const avg = sum/this.length
    return avg
  }

  sum() {
    if (this.length == 0) {
      return 0
    } else {
      const sum = this.items.reduce((total, amount) => total + amount);
      return sum
    }
  }
};

module.exports = SortedList;

// var sl = new SortedList()

// sl.add(1)
// sl.add(2)

// console.log(sl.get(0))