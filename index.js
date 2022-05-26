class SortedList {
  
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length = this.items.length
  }

  get(pos) {
    if (this.items.indexOf(pos) >= 0){
      return this.items.indexOf(pos)
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.items.length > 0){
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0){
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() { return this.items.reduce((a,b) => a + b, 0) }

  avg() {
    if (this.items.length < 1){
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b) => a + b, 0) / this.length
    }

  }

}

module.exports = SortedList;
