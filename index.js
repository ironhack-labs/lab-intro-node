class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push (item)
    this.items.sort ((a, b) => {
      if (a < b) {
        return -1
      }
    })
  }
 

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos]
  } else {
    throw new Error('OutOfBounds')
  }
}

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[this.items.length -1]
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[0]
    }
  }

  sum() {
    return this.items.reduce((accu, items) => 
    accu + items, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
  } else {
    return this.items.reduce((accu, items) => 
    accu + items, 0) / this.items.length
  }
 }
 
}

module.exports = SortedList;