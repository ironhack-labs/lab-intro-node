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

  }

  sum() {

  }

  avg() {
    
  }
}

module.exports = SortedList;
