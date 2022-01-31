class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a,b) => {
      return a - b
    })
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    } else {
      let position = this.items[pos]
      return position
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let highest = Math.max.apply(null, this.items)
      return highest
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let lowest = Math.min.apply(null, this.items)
      return lowest
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
