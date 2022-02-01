class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length
  }

  get(pos) {
     if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length -1]

  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    let sum = 0
    for (let item of this.items) {
      sum += item
    }
    return sum
  }

  avg() {
    if (this.items.length > 0) {
      let sum = 0
      for (let item of this.items) {
        sum += item
      }
    return sum/this.items.length
    }
    throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
