class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length++
  }

  get(pos) {
    if (pos < this.length && pos > -1) {
      return this.items[pos]    
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (!this.items.length > 0) {
      throw new Error('EmptySortedList')
  } else {
    let max = this.items.sort()
    return max[this.items.length-1]
  }
}

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    } else {
      let min = this.items.sort()
      return min[0]
    }
  }

  sum() {
    let suma = 0
    this.items.forEach(element => {
      suma+=element
    })
    return suma
  }

  avg() {
    if (!this.items.length) {
    throw new Error('EmptySortedList')} else {
    return this.sum()/this.items.length;
  }
}
}

module.exports = SortedList;
